const express = require('express')
const app = express()
const port = 3000

const sqlite3 = require('sqlite3').verbose();

var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('public'))

app.post('/addscore', function (req, res) {
    let db = new sqlite3.Database('highscore.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error("err.message" + err.message);
        }
        console.log('Connected to the highscore database.');
    });


    let vals = [req.body.name, req.body.score];

    db.run(`INSERT INTO highscore(name,score) VALUES(?,?)`, vals, function (err) {
        if (err) {
            return console.log(err.message);
        }


        console.log(`A row has been inserted with rowid ${this.lastID}`);

        res.json({
            message: 'Alles gut' + this.lastID
        })
    });

    // console.log("Name: " + req.params.name + " score: " + req.params.score);
    // res.json({
    //     awnser: 'Gamern ' + req.params.name + " slog till ned en score på " + req.params.score
    // })



    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
})



app.get('/addhighscore', function (req, res) {
    let db = new sqlite3.Database('highscore.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error("err.message" + err.message);
        }
        console.log('Connected to the highscore database.');
    });


    let vals = [req.params.name, req.params.score];

    db.run(`INSERT INTO highscore(name,score) VALUES(?,?)`, vals, function (err) {
        if (err) {
            return console.log(err.message);
        }


        console.log(`A row has been inserted with rowid ${this.lastID}`);

    });
    res.json({
        message: 'Alles gut'
    })
    // console.log("Name: " + req.params.name + " score: " + req.params.score);
    // res.json({
    //     awnser: 'Gamern ' + req.params.name + " slog till ned en score på " + req.params.score
    // })



    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
})



app.get('/gethighscores', function (req, res) {

    let db = new sqlite3.Database('highscore.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error("err.message" + err.message);
        }
        console.log('Connected to the highscore database.');
    });
    db.serialize(() => {
        db.all(`SELECT * FROM highscore`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            res.json({
                data: row
            })
        });
    });
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))