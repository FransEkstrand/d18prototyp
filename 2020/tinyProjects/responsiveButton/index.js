var express = require('express');
var app = express();



app.get("/buttoncall", function (req, res) {
    res.json({ message: "running" })
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
});



app.listen(3000, function () { console.log("startade servern"); })