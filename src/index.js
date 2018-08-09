'use strict';
const env = require('dotenv').config();

import path from 'path';
import fs from 'fs';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { strings } from './public/lib/i18n';
import { signatureVerify, validateUser } from './database/databaseLogic.js';
import { getUser, removeUser } from './database/realmSchema.js';
import { responseError } from './helpers/helpers.js';

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const passportOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

const jwtStrategy = new Strategy(passportOpts, (payload, next) => {
    const user = getUser(payload.pubkey).then(user => {
        if (validateUser(user)) {
            next(null, user);
        } else {
            removeUser(payload.pubkey);
            next(null, false);
        }
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

app.post('/sig_verify', (req, res) => { res.send(signatureVerify(req.body)); });

app.get('/get_user', passport.authenticate('jwt', { session: false }),(req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send(responseError(strings().auth.errors[6]));
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
