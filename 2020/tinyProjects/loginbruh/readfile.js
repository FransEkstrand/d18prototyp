var express = require("express")
var fs = require("fs")
var cookieParser = require('cookie-parser');
var session = require('express-session');
var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./database.db');

var app = express();
var portnummer = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.use(cookieParser());
app.use(session({ secret: "Master of the Universe !!" }));//He-man



app.all('*', function (req, res, next) {
    console.log("Inne i *")
    next()
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.get("/admin", function (req, res) {
    if (req.session.logged)
        res.sendFile(__dirname + '/admin.html');
    else {
        res.sendFile(__dirname + '/login.html');
    }
})

app.get("/logout", function (req, res) {
    req.session.logged = false;
    res.sendFile(__dirname + '/login.html');
})

app.get("/testaccess", function (req, res) {
    if (req.session.logged) {
        res.send("INLOGGAD")
    } else {
        res.send("INTE INLOGGAD")
    }
})

app.post('/login', function (req, res) {
    console.log(req.body.password)
    console.log(req.body.username)

    //let logged = false;
    req.session.logged = false;
    let username = req.body.username;
    let password = req.body.password;
    let sql = `SELECT count(*) as truu FROM information 
    WHERE username=? AND password=?`
    db.get(sql, [username, password], function (err, row) {
        if (row.truu) {
            req.session.logged = true;
            res.render("/admin", username)
        }

    })


});

app.listen(portnummer, function () { console.log("STARTAT servern och lyssnar på portnummer:" + portnummer) })