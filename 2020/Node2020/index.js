const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const {
    query
} = require('express');
const app = express()
const port = 3000

let bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(express.static('public'))



let db = new sqlite3.Database('./db/databasforschool.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});


app.get('/getpersons', (req, res) => {
    db.all("SELECT * FROM persons", [], (err, rows) => {

        res.json(rows)
    });


});

app.get('/updateperson/:id', (req, res) => {
    let query = `UPDATE persons SET firstname = "Bat", lastname = "Man" WHERE id =${req.params.id}`
    db.run(query, [], function (err) {
        if (err) {
            res.json({
                message: err.message
            })
        }

        res.json({
            message: 'ok'
        })
    })
})
app.get('/deleteperson/:id', (req, res) => {
    let query = `DELETE FROM persons SET firstname = "Bat", lastname = "Man" WHERE id =${req.params.id}`
    db.run(query, [], function (err) {
        if (err) {
            res.json({
                message: err.message
            })
        }

        res.json({
            message: 'ok'
        })
    })
})

app.post('/insertdata', function (req, res) {
    let query = `INSERT INTO persons(firstname, lastname) VALUES("${req.body.firstname}", "${req.body.lastname}")`

    db.run(query, [], function (err) {
        if (err) {
            res.json({
                message: err.message
            })
        }

        res.json({
            message: 'ok'
        })
    })
})

app.get('/test', (req, res) => {
    console.log("test");
    res.json({
        message: "ok"
    })
});
app.get('/user/:user', function (req, res, next) {
    req.params;
    console.log("User: " + req.params.user)
    res.json(req.params);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



// db.close((err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });