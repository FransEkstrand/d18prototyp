var express = require('express');
var router = express.Router();
const db = require('../databaise');

let sql = `SELECT * from , surname, user_id, 
sum(points) as points FROM results, persons 
WHERE results.user_id=persons.id GROUP BY user_id ORDER BY points`;

/* GET home page. */
router.get('/', function (req, res, next) {
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('db', {
            data: rows
        });
    })

});

module.exports = router;