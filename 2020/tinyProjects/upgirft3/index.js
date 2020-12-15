const sqlite3 = require('sqlite3').verbose();
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let db = new sqlite3.Database('accounts.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the persons SQlite database.');
});

app.get('/', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname + '/home.html'));
    } else {
        response.sendFile(path.join(__dirname + '/login.html'));
    }

});

app.post('/auth', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    console.log(username, password)
    if (username && password) {
        let sql = `SELECT * FROM accounts WHERE username = '${username}' AND password = '${password}'`
        console.log(sql)
        db.get(sql, function (err, row) {
            console.log(row)
            if (err) {
                return console.error(err.message);
            }
            if (row) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

app.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.listen(3000);