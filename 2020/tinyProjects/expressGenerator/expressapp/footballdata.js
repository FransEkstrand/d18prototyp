var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('footballdata.db')
module.exports = db;