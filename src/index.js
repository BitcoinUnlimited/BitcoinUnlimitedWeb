var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('The Bitcoin Unlimited website is now being served at http://%s:%s', host, port);
});