'use strict';
const env = require('dotenv').config();

import path from 'path';
import fs from 'fs';
import os from 'os';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import Busboy from 'busboy';
import jwt from 'jsonwebtoken';
import { strings } from './public/lib/i18n';
import { signatureVerify, validateAuth, realmGet, realmUpsert, realmDelete, getAuth, removeAuth } from './database/databaseLogic.js';
import { resErr, checkPath, toBase64 } from './helpers/helpers.js';

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

const jwtMiddleware = () => passport.authenticate('jwt', { session: false });

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
app.get('/get_auth', passport.authenticate('jwt', { session: false }), (req, res) => (req.user) ? res.send(req.user) : res.send(resErr(strings().auth.errors[6])));
app.post('/sig_verify', (req, res) => res.send(signatureVerify(req.body)));
app.post('/api/get', (req, res) => realmGet(req.body).then(result => res.send(result)).catch(err => res.send(err)));
app.post('/api/delete', jwtMiddleware(), (req, res) => realmDelete(req.body).then(result => res.send(result)).catch(err => res.send(err)));
app.post('/api/upsert', jwtMiddleware(), (req, res) => {
    try {
        let busboy = new Busboy({ headers: req.headers });
        let fields = {};
        if (isDef(res.user)) {
            fields.auth = res.user;
        }
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            file.on('end', function() {
                // store images in the database for now
                fields[fieldname] = toBase64(file);
            });
        });
        busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            fields[fieldname] = val;
        });
        busboy.on('finish', function() {
            realmUpsert(fields).then(result => res.send(result)).catch(err => res.send(err))
        });
        req.pipe(busboy);
    } catch(e) {
        res.send({status: 'error', message: e});
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
