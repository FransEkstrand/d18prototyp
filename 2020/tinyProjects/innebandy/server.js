const express = require('express')
var cors = require('cors')
var sqlite3 = require('sqlite3').verbose()
const app = express()
const port = 1337
var fs = require('fs')
var multer = require('multer');
var Jimp = require('jimp')
var upload = multer({ dest: 'uploads/' })

var db = new sqlite3.Database('dbdb.db')
app.use(cors())


app.get('/resize', (req, res) => {
  let newfolder = "resized/";

  fs.readdir("uploads", function (err, filenames) {
    for (let i = 0; i < filenames.length; i++) {
      Jimp.read("uploads/" + filenames[i], (err, lenna) => {
        if (err) throw err;
        lenna
          .resize(256, 256)
          .quality(60)
          .background(0xffffff)
          .write(newfolder + filenames[i]);
        res.send('profile ok')
      })
    }
  })

})
app.post('/profile', upload.single('avatar'), (req, res) => {
  let newfolder = "uploads/"
  let filename = req.file.destination + req.file.filename;
  Jimp.read(filename, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(256, 256)
      .quality(60)
      .grayscale()
      .background(0xffffff)
      .write(newfolder + req.file.filename + '.jpg');
    res.send('profile ok')
  })


})

app.get('/getplayers', (req, res) => {
  let sql = 'SELECT * FROM players'
  db.all(sql, function (err, rows) {

  })

})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})