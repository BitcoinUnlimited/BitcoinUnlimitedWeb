'use strict';
const env = require('dotenv').config();

import path from 'path';
import fs from 'fs';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { insertUser, getUser } from './database/realmSchema.js';
import { validateAddress, fixAddressFormat, messageVerify, jwtSecret } from './database/verifySignature.js';

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const errorObject = msg => ({ status: 'error', message: `Error: ${msg}` });

const passportOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

const jwtStrategy = new Strategy(passportOpts, (payload, next) => {
    const user = getUser(payload.pubkey).then(user => {
        next(null, user);
    }).catch(e => {
        next(null, false);
    });
});

passport.use(jwtStrategy);

let app = express();

redirects.forEach(redirect => {
    app.get(redirect.from, function(req, res) {
        res.redirect(redirect.to);
    });
});

app.get('/:page.html', (req, res) => {
    res.redirect('/' + req.params.page);
});

app.get('/downloads/:file', (req, res) => {
    res.redirect('/components/bitcoin-unlimited-web-downloads/' + req.params.file);
});

app.use(express.static(path.join(__dirname, './public')));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sig_verify', (req, res) => {
    const { pubkey, challenge, signature } = req.body;
    if (!pubkey || !challenge || !signature) {
        res.send(errorObject('Verification failed'));
    } else if (messageVerify(req.body)) {
        const expires = Math.floor(Date.now() / 1000) + (60 * 60);
        insertUser({ pubkey: pubkey, challenge: challenge, signature: signature, expires: expires }).catch(e => {
            res.send(errorObject(e));
        });
        const token = jwt.sign({
            pubkey: pubkey,
            challenge: challenge,
            signature: signature,
            expires: expires,
        }, process.env.JWT_SECRET);
        res.send(token);
    } else {
        res.send(errorObject('Verification failed'));
    }
})

app.get('/get_user', passport.authenticate('jwt', { session: false }),(req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send(errorObject('User not found'));
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

let server = app.listen(8080, "localhost", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});

// res.setHeader('Content-Type', 'application/json');
// getUser().then(users => {
//     res.send({
//         status: 'success',
//         message: 'Users',
//         data: users,
//     });
// }).catch(e => {
//     console.log(e);
//     res.send({
//         status: 'failed',
//         message: `No users!: ${e}`,
//     });
// });
// var token = jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (60 * 60),
//     pubkey: 'foobar'
// }, 'secret-key');
// res.send(token);

// const jwtMiddlware = (req, res, next) => {
//     const header = req.headers["authorization"];
//     if (typeof header !== 'undefined') {
//         const bearer = header.split(' ');
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     } else {
//         console.log('not allowed');
//         res.sendStatus(403);
//     }
// }
