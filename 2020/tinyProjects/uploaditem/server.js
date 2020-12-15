const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

var db = new sqlite3.Database('./db/serverData.db');

app.use(express.static('public'))

app.get('/delete/:id',function(req,res){
    let id = req.parms.id;
    let sql='DELETE FROM products WHERE id=?'
    db.run(sql,[id],function(){
        

    })
})

app.post('/insertdata', function (req, res) {
    let productname = req.body.productname

    let sql = 'INSERT INTO products(productname) VALUES(?)'
    db.run(sql, [productname], function (err) {
        res.send({ message: "ok" })
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})