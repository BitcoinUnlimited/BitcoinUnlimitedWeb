'use strict';

import path from 'path';
import fs from 'fs';
import express from 'express';

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

app.use(express.static(path.join(__dirname, './public')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

let server = app.listen(8080, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});
