fs = require('fs')

fs.readFile('text.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);

});
fs.readFile('das.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);

});
fs.readFile('asd.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);

});