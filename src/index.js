'use strict';
const env = require('dotenv').config();

import path from 'path';
import fs from 'fs';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { strings } from './public/lib/i18n';
import { signatureVerify, validateAuth, realmOp, getAuth, removeAuth } from './database/databaseLogic.js';
import { resErr } from './helpers/helpers.js';

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const passportOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

const jwtStrategy = new Strategy(passportOpts, (payload, next) => {
    const auth = getAuth(payload.pubkey).then(auth => {
        if (validateAuth(auth)) {
            next(null, auth);
        } else {
            removeAuth(payload.pubkey);
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
app.post('/realm', passport.authenticate('jwt', { session: false }), (req, res) => realmOp(req.body).then(result => res.send(result)).catch(err => res.send(err)));
app.get('/get_auth', passport.authenticate('jwt', { session: false }),(req, res) => (req.user) ? res.send(req.user) : res.send(resErr(strings().auth.errors[6])));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

let server = app.listen(8080, "localhost", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});
