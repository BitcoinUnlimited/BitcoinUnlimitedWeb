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

fs.readdirSync(path.join(__dirname, '../src/public/views/pages')).forEach(function(pageFile) {
    let page = '/' + pageFile.slice(0, -4);
    app.get(page, function(req, res) {
        res.sendfile(path.join(__dirname, '../src/public/index.html'));
    });
    app.get(page + '.html', function(req, res) {
        res.redirect(page);
    });
});

app.use(express.static(path.join(__dirname, './public')));

let server = app.listen(8080, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});