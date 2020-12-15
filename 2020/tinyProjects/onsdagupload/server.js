let express = require("express");
let sqlite3 = require("sqlite3");

let app = express();

app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded())

var db = new sqlite3.Database('./db/serverData.db');

app.get("/test", function (req, res) {
    console.log("TEST2");
    res.send("message2")
})

app.post("/form", function (req, res) {
    let productname = req.body.name;

    let sql = 'INSERT INTO products(productname) VALUES(?)'
    db.run(sql, [productname], function (err) {
        res.send({ message: "ok" })
    })
})


app.listen(3333)



