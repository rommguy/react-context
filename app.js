var express = require('express');
var http = require('http');
start();

function start(){
    'use strict';

    var app = express();

    app.use('/', express.static(__dirname));

    var server = http.createServer(app);
    server.listen(1111, function () {
        console.log('listening on port 1111');
    });
}