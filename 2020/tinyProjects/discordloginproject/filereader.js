fs = require('fs')

var username = process.argv[2];

var password = process.argv[3];

console.log(username, password)

let canlogin = false;

fs.readFile('login.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    let x = data.split("\r\n");
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
        let cred = x[i].split(":")
        console.log(cred);
        if (username === cred[0] && password === cred[1]) {
            canlogin = true
            break;
        }
    }

    console.log("Correct login information: " + canlogin);
});