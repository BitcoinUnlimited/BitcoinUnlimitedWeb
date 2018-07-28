'use strict';

import path from 'path';
import fs from 'fs';
import express from 'express';
import jwt from 'jsonwebtoken';

import redirects from './data/redirects.json';

let app = express();

redirects.forEach(function(redirect) {
    app.get(redirect.from, function(req, res) {
        res.redirect(redirect.to);
    });
});

app.get('/:page.html', function(req, res) {
    res.redirect('/' + req.params.page);
});

app.get('/downloads/:file', function(req, res) {
    res.redirect('/components/bitcoin-unlimited-web-downloads/' + req.params.file);
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/blog/admin', jwtMiddlware, function(req, res) {
    jwt.verify(req.token, 'secret-key', function(err, data) {
        if (err) {
            res.send("send to 403")
            //res.sendStatus(403);
        } else {
            // show page
            res.json({
                text: 'test'
            });
        }
    });
});

app.get('/blogtest', function(req, res) {
    var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        pubkey: 'foobar'
    }, 'secret-key');
    res.send(token);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

let server = app.listen(8080, "localhost", function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});

function jwtMiddlware(req, res, next) {
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
