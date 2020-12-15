const {
    ESRCH
} = require('constants');

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var path = require('path');

app.io = io;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});

app.get('/lamp', (req, res) => {
    res.sendFile(__dirname + '/lamp.html');
});

app.get('/lamp/:id', (req, res) => {
    let lampid = req.params.id;

    req.app.io.emit('message', {
        lampid: lampid
    })
    res.json({
        message: "ok"
    });
});



http.listen(3000);