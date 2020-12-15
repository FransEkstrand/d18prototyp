var express = require('express');
var router = express.Router();
var multer = require('multer')
var fs = require("fs");
const db = require('../webshop');

var imageurl = 'public/images/'
var upload = multer(
    {
        dest: "../" + imageurl,
        fileFilter: (req, file, cb) => {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        }
    }
)
router.post('/addproductcategory', function (req, res, next) {
    let productid = req.body.productid
    let categoryid = req.body.categoryid
    let sql = "INSERT INTO product_categories (p_id,c_id) VALUES(?,?)"
    db.run(sql, [productid, categoryid], function (err) {
        if (err) {
            res.send(err)
        }
        let message = "added sucressfully";
        res.send({ name: "ettan" })

    })
})
router.post('/profile', upload.single('avatar'), function (req, res, next) {
    var filename = imageurl + Date.now() + ".jpg";
    let title = req.body.title;
    let price = req.body.price;
    let description = req.body.description;
    let categoryid = parseInt(req.body.categoryid)
    console.log(req.file.path)
    console.log(req.file)

    fs.rename(req.file.path, filename, (err) => {
        if (err) {
            console.log(err);
            res.send(err)
        }
        filename = removePublic(filename);
        let sql = `INSERT INTO products (name,description,price,image) VALUES(?,?,?,?)`
        db.run(sql, [title, description, price, filename], function (err) {
            if (err) {
                console.log(err);
                res.send(err)
            }
            let productid = this.lastID
            if (categoryid) {
                let sql1 = "INSERT INTO product_categories (p_id,c_id) VALUES(?,?)";
                db.run(sql1, [productid, categoryid], function (err) {
                    if (err) {
                        console.log(err);
                        res.send(err)
                    }
                    res.redirect("/uploads/adminpage")

                })
            }

        })

    });
})
router.get("/adminpage", function (req, res) {
    let sql = "SELECT * FROM categories";
    db.all(sql, [], (err, cats) => {
        if (err) {
            console.log(err);
            res.send(err)
        }
        res.render("admin", { cats: cats })
    })
})

function removePublic(str) {
    let arr = str.split("/");
    return arr[1] + "/" + arr[2];
}
router.get('/test', function (req, res, next) {
    res.send("Makkara")
})


module.exports = router;