'use strict';
const env = require('dotenv').config();

import path from 'path';
import Axios from 'axios';
import fs from 'fs';
import os from 'os';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import Busboy from 'busboy';
import jwt from 'jsonwebtoken';
import { strings } from './public/lib/i18n';
import { signatureVerify, validateAuth, typeIsValid, realmGet, realmSave, realmDelete, getAuth, removeAuth, getLogs } from './database/databaseLogic.js';
import { resErr, eToStr, checkPath, toBase64, getKeyForType } from './helpers/helpers.js';

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

const passportOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

const jwtStrategy = new Strategy(passportOpts, (payload, next) => {
    getAuth(payload.pubkey).then(auth => {
        if (validateAuth(auth)) {
            next(null, auth);
        } else {
            removeAuth(payload.pubkey);
            next(null, false);
        }
    }).catch(e => {
        console.log(eToStr(e));
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

app.get('/user_auth', jwtMiddleware(), (req, res) => (req.user) ? res.json(req.user) : res.json('Req.user is not set in /user_auth'));

app.get('/get_logs', jwtMiddleware(), (req, res) => {
    getLogs().then(result => {
        res.json(result);
    }).catch(e => {
        res.json(resErr(`getLogs(): ${e}`));
    })
});

app.post('/sig_verify', (req, res) => {
    signatureVerify(req.body).then(result => res.json(result)).catch(e => res.json(resErr(e)));
});

app.get('/api/get/:type/:uid?', (req, res) => {
    let { params: { type, uid } } = req;
    let { query } = req;
    console.log(`type: ${type} uid: ${uid}`);
    if (!type || !typeIsValid(type)) {
        res.redirect('/not-found');
    } else {
        realmGet({ realmType: type, uid, query }).then(result => res.json(result)).catch(e => res.json(resErr(e)));
    }
});
app.post('/api/delete', jwtMiddleware(), (req, res) => {
    const { realmType } = req.body;
    if (!realmType || !typeIsValid(realmType)) {
        res.json(resErr('Invalid Type.'))
    } else {
        const typePrimaryKey = getKeyForType(realmType);
        if (!req.body[typePrimaryKey]) {
            res.json(resErr(`Missing ${typePrimaryKey}.`))
        } else {
            realmDelete(req.body).then(result => res.json(result)).catch(e => res.json(resErr(e)));
        }
    }
});
app.post('/api/upsert', jwtMiddleware(), (req, res) => {
    try {
        let busboy = new Busboy({ headers: req.headers });
        let fields = {};
        if (req.user && req.user.pubkey) {
            fields.pubkey = req.user.pubkey;
        }
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            file.on('end', function() {
                fields[fieldname] = toBase64(file);
            });
        });
        busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            fields[fieldname] = val;
        });
        busboy.on('finish', function() {
            if (!fields.realmType || !typeIsValid(fields.realmType)) throw 'Incorrect realmType or not specified.';
            realmSave(fields).then(result => res.json(result)).catch(e => {
                res.json(resErr(e));
            })
        });
        req.pipe(busboy);
    } catch(e) {
        res.json({status: 'error', message: eToStr(e)});
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
