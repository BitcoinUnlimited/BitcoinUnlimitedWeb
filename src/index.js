'use strict';
const env = require('dotenv').config();

import path from 'path';
import fs from 'fs';
import express from 'express';
import redirects from './data/redirects.json';
import bodyParser from 'body-parser';
import Busboy from 'busboy';
import {
    isAdmin, signatureVerify, validateAuth,
    typeIsValid, typeIsValidPublic, realmGet,
    realmGetSecure, realmSave, realmDelete,
    getAuth, removeAuth, realmBackup, 
    getLoginChallenge, revertDatabase
} from './database/databaseLogic.js';
import {
    resErr, resSuccess, eToStr,
    getKeyForType, saveDateFormat
} from './helpers/helpers.js';
import { 
    checkPath, getStaticFiles, checkBackupPath
} from './helpers/fileHelpers.js';

import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

// Declares the /static path files directory
const staticFilesDir = path.join(__dirname, '../assets');
// Declares where database content backups are stored
const backupDir = path.join(staticFilesDir, '/backups');

const passportOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}

/**
 * [jwtStrategy jwtStrategy is passed to the passport instance, which is used by the
 * jwtMiddleware function to validate protected paths]
 * @type {Strategy}
 */
const jwtStrategy = new Strategy(passportOpts, (payload, next) => {
    isAdmin(payload.pubkey).then(res => {
        getAuth(payload.pubkey).then(auth => {
            if (validateAuth(auth)) {
                next(null, auth);
            } else {
                removeAuth(payload.pubkey);
                next(null, false);
            }
        }).catch(e => {
            removeAuth(payload.pubkey);
            next(null, false);
        });
    }).catch(e => {
        removeAuth(payload.pubkey);
        next(null, false);
    });
});

passport.use(jwtStrategy);

/**
 * [jwtMiddleware Middleware helper function.]
 * @return {Object} [Passport auth object.]
 */
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

/*
 * This sets our staticFilePath to be accessible via the http://domain.com/static path
 */
if (checkPath(staticFilesDir)) {
    app.use('/static', express.static(staticFilesDir));
}
app.use(express.static(path.join(__dirname, './public')));

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
 * Returns the 12 word challenge on the /login path
 */
app.get('/get_login_challenge', (req, res) => {
    getLoginChallenge().then(result => {
        res.send(result)
    }).catch(e => {
        res.send(resErr(e));
    });
});

/*
 * called from /public/views/pages/protected/auth.jsx.
 * See main.jsx to view routes protected by Auth.jsx.
 */
app.get('/user_auth', jwtMiddleware(), (req, res) => (req.user) ? res.json(req.user) : res.json('Req.user is not set in /user_auth'));

/*
 * Get data securely (requires jwt middleware).
 */
app.get('/get/secure/:type/:uid?', jwtMiddleware(), (req, res) => {
    let { params: { type, uid } } = req;
    if (!type || !typeIsValid(type)) {
        res.redirect('/dashboard');
    } else {
        realmGetSecure(type, uid).then(result => {
            res.json(result);
        }).catch(e => {
            res.json(resErr(`getSecure(${type}): ${eToStr(e)}`));
        })
    }
});

/*
 * Gets a list of all available static files within the specified
 * staticFilesDir location.
 */
app.get('/get_static_files', jwtMiddleware(), (req, res) => {
    getStaticFiles(staticFilesDir).then(result => {
        res.send(result);
    }).catch(e => {
        res.send(resErr(e));
    })
});

/*
 * If this path is accessed and the jwt middleware validates it will create a
 * new snapshot of the database, returning the path after a successful save.
 */
app.get('/get_backup', jwtMiddleware(), (req, res) => {
    let backupName = '/' + saveDateFormat(new Date()) + '.json';
    realmBackup().then(result => {
        let saveName = staticFilesDir + '/backups' + backupName;
        if (checkPath(saveName)) {
            fs.writeFile(saveName, JSON.stringify(result));
        }
    }).then(val => {
        res.send('/static/backups' + backupName);
    }).catch(e => {
        res.send(resErr(`getBackup(): ${eToStr(e)}`));
    })
});

/*
 * Returns a list of all database backups
 */
app.get('/get_backup_list', jwtMiddleware(), (req, res) => {
    getStaticFiles(backupDir).then(result => {
        res.send(result);
    }).catch(e => {
        res.send(resErr(e));
    })
});

/*
 * Reverts the current database to the snapshot at the revertPath location.
 * Returns true if the operatoin was successful.
 */
app.post('/revert_database', jwtMiddleware(), (req, res) => {
    const { revertPath } = req.body;
    checkBackupPath(staticFilesDir, revertPath).then(path => {
        revertDatabase(path).then(result => {
            res.send(result);
        }).catch(e => {
            throw e;
        });
    }).catch(e => {
        res.send(resErr(e));
    });
});

/*
 * Verifies the user-generated signature for the 12 word login challenge.
 */
app.post('/sig_verify', (req, res) => {
    signatureVerify(req.body).then(result => res.json(result)).catch(e => res.json(resErr(e)));
});

/*
 * Insecure data call to retrieve all published == true data.
 */
app.get('/api/get/:type/:uid?', (req, res) => {
    let { params: { type, uid } } = req;
    let { query } = req;
    if (!type || !typeIsValidPublic(type)) {
        res.redirect('/not-found');
    } else {
        realmGet({ realmType: type, uid, query }).then(result => res.json(result)).catch(e => res.json(resErr(e)));
    }
});

/*
 * Securely remove data from the database.
 * Used in:
 * /public/views/components/protected/AdminList.jsx
 * /public/views/pages/protected/realm-form-wrapper.jsx
 */
app.post('/api/delete', jwtMiddleware(), (req, res) => {
    const { realmType } = req.body;
    if (!realmType || !typeIsValid(realmType)) {
        res.json(resErr('Invalid Type.'))
    } else if (!req.user || !req.user.pubkey) {
        res.json(resErr('Admin error. Please log in.'));
    } else {
        const typePrimaryKey = getKeyForType(realmType);
        if (!req.body[typePrimaryKey]) {
            res.json(resErr(`Missing ${typePrimaryKey}.`))
        } else {
            req.body.userpubkey = req.user.pubkey;
            realmDelete(req.body).then(result => res.json(result)).catch(e => res.json(resErr(e)));
        }
    }
});

/*
 * Handles file uploads and stores them in the staticFilePath.
 */
app.post('/api/upload', jwtMiddleware(), (req, res) => {
    try {
        let busboy = new Busboy({ headers: req.headers });
        let filePath;
        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            let type = mimetype.split('/')[1] || mimetype.split('/')[0];
            filePath = path.join(staticFilesDir, type, filename).replace(/\s/g, '');
            if (checkPath(filePath)) {
                file.pipe(fs.createWriteStream(filePath));
            }
        });
        busboy.on('finish', function() {
            let pathArr = filePath.split('/');
            let staticFilePath = '/static/' + pathArr.slice(pathArr.indexOf('assets') + 1).join('/');
            res.json(resSuccess(staticFilePath));
        });
        req.pipe(busboy);
    } catch(e) {
        res.json(resErr(`/api/upload: ${eToStr(e)}`));
    }
});

/*
 * Handles database create and update operations.
 */
app.post('/api/upsert', jwtMiddleware(), (req, res) => {
    try {
        let busboy = new Busboy({ headers: req.headers });
        let fields = {};
        if (req.user && req.user.pubkey) {
            fields.userpubkey = req.user.pubkey;
            busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
                fields[fieldname] = val;
            });
            busboy.on('finish', function() {
                if (!fields.realmType) throw 'realmType not specified.';
                if (!typeIsValid(fields.realmType)) throw 'Invalid realmType specified.';
                realmSave(fields).then(result => res.json(result)).catch(e => {
                    res.json(resErr(e));
                })
            });
            req.pipe(busboy);
        } else {
            throw 'Please login.';
        }
    } catch(e) {
        res.json({status: 'error', message: eToStr(e)});
    }
});

/*
 * Catch-all for non-explicit paths.
 */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

let server = app.listen(8080, "localhost", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});
