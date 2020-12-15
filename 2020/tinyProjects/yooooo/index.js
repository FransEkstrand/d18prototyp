const express = require('express')
const ejs = require('ejs')
var sqlite3 = require('sqlite3').verbose()
const app = express()
const port = 1337
app.set('view engine', 'ejs')
var db = new sqlite3.Database('dbdb.db')
app.use(express.static("public"))

let string = "1234567890qwertyuiopåasdfghjklöäzxcvbnm";

let arr = string.split("")
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
console.log(arr);
app.get("/getkeypressed/id", (req, res) => {

    req.app.io.emit('message', {
        man: "bruh"
    })
    res.json({
        message: "ok"
    });
})
app.get('/getplayers', (req, res) => {
    db.all('SELECT * FROM players', function (err, row) {
        if (err) {
            return err
        }
        console.log(row);
        res.render('pages/highscores', {
            score: row
        })
    })
})


app.post('/postplayers', (req, res) => {

    let sql = 'INSERT INTO players (firstname, lastname, highscore) VALUES(?,?,?)'
    db.run(sql, [firstname, lastname, highscore], function (err, rows) {
        if (err)
            return res.send(err)
        res.json("posted")
    })

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})