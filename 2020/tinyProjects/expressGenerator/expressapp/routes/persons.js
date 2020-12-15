var express = require('express');
var router = express.Router();

let data = require('../jsondata.js')

console.log(data);

/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    res.render('persons', {
        data: data
    })
});

module.exports = router;