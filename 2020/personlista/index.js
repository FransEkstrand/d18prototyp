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


let db = new sqlite3.Database('./databasforschool.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});


// -------------------------------------------------------------------
// ----------------------------- GET DATA PERSONS --------------------
// -------------------------------------------------------------------

app.get('/getpersons', function (req, res) {
    let query = `SELECT * FROM persons`

    db.all(query, function (err, rows) {
        if (err) {
            res.json(err.message)
        }
        res.json(rows)
    })
})

// -------------------------------------------------------------------
// ----------------------------- GET PERSON --------------------------
// -------------------------------------------------------------------

app.get('/getperson/:id', function (req, res) {
    let query = `SELECT * FROM persons WHERE id=?`

    db.get(query, [req.params.id], function (err, row) {
        res.json(row)
    })
})



// -------------------------------------------------------------------
// ----------------------------- ADD PERSON --------------------------
// -------------------------------------------------------------------

app.post('/insertperson', function (req, res) {
    let query = `INSERT INTO persons(firstname, lastname) VALUES(?,?)`

    db.run(query, [req.body.firstname, req.body.lastname], function (err) {
        if (err) {
            res.json({
                message: err.message
            })
        }
        res.json({
            message: `Person inserted with id ${this.lastID}`
        })
    })
})




// -------------------------------------------------------------------
// ----------------------------- UPDATE PERSON -----------------------
// -------------------------------------------------------------------

app.post('/updateperson/:id', (req, res) => {
    let query = `UPDATE persons SET firstname =?, lastname =? WHERE id =?`
    db.run(query, [req.body.firstname, req.body.lastname, req.body.id], function (err) {
        if (err) {

            res.json(err.message)

        }
        let num = this.changes
        res.json({
            message: `Rows updated: ${num}`
        })
    })
})


// -------------------------------------------------------------------
// ------------------------------ REMOVE PERSON ----------------------
// -------------------------------------------------------------------

app.get('/deleteperson/:id', (req, res) => {
    let query = `DELETE FROM persons WHERE id =?`
    db.run(query, [req.params.id], function (err) {
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



app.get('*', (req, res) => {

    res.send('404')
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});