'use strict';
const env = require('dotenv').config();

import path from 'path';
import fs from 'fs';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { insertUser, getUser, realmDB } from './database/realmSchema.js';
import { validateAddress, fixAddressFormat, messageVerify } from './database/verifySignature.js';

const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;

console.log(process.env.JWT_SECRET);

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/blog/admin', jwtMiddlware, function(req, res) {
//     jwt.verify(req.token, 'secret-key', function(err, data) {
//         if (err) {
//             res.send("send to 403")
//             //res.sendStatus(403);
//         } else {
//             // show page
//             res.json({
//                 text: 'test'
//             });
//         }
//     });
// });

app.post('/sig_verify', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.challenge || !req.body.address || !req.body.signature) {
        res.status(401).send({ status: 'error' });
    }
    if (messageVerify(req.body)) {
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            pubkey: req.body.pubkey,
            challenge: req.body.challenge,
            signature: req.body.signature,
        }, process.env.JWT_SECRET);
        res.send(token);
    } else {
        res.status(401).send({ status: 'unauthorized' });
    }
})

app.post('/new_user', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        var result = insertUser(req.body);
        res.send({
            status:'success',
            data: result,
        });
    } catch (e) {
        res.send({
            status:'failure',
            data: e,
        });
    }
    //const { pubkey, signature } = req.body;
    // insertUser({ pubkey, signature }).then(user => {
    //     res.send({
    //         status: 'success',
    //         message: 'Inserted new user',
    //         data: user,
    //     });
    // }).catch(e => {
    //     res.send({
    //         status: 'failed',
    //         message: `Insert user error!: ${e}`,
    //     });
    // });
});

app.get('/user/:id', (req, res) => {
    getUser(req.params.id).then(result => {
        console.log('send result');
        res.send(result);
    }).catch(e => {
        console.log('errr');
        res.send(e);
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
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

let server = app.listen(8080, "localhost", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});

const jwtMiddlware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        console.log('not allowed');
        res.sendStatus(403);
    }
}
