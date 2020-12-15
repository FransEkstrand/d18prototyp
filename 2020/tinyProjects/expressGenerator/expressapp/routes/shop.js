var express = require('express');
var router = express.Router();
var db = require('../webshop');


let ppp = 2;
let activepage = 1;
let range = ppp * (activepage - 1)
router.post("/addproductcategory", function (req, res, next) {


})

router.get("/addproductcategorypage", function (req, res, next) {
    let page = "addproductcategory";
    let sql = "SELECT * FROM categories"
    let sql1 = "SELECT * FROM prodycts WHERE id NOT IN(SELECT DISTINCT p_id FROM product_categories)"
    db.all(sql, function (err, cats) {
        let categories = cats;
        db.all(sql1, function (err, prods) {
            let products = prods;
            res.render(page, {
                products: products,
                categories: categories
            });
        })
    })
})


router.get('/', function (req, res, next) {
    let sql1 = `SELECT * FROM players`;
    //let categories = [{name:"Kategori 1"},{name:"Kategori 2"}]

    console.log(range, ppp)
    db.all(sql1, [], (err, players) => {
        if (err) {
            throw err;
        }


        res.render('football', { players: players });


    });
});





/* GET home page. */
router.get('/', function (req, res, next) {
    let sql1 = `SELECT *,(SELECT count(*) from products) as total FROM products LIMIT ?,?`;
    //let categories = [{name:"Kategori 1"},{name:"Kategori 2"}]
    let sql2 = `SELECT * FROM categories`;
    console.log(range, ppp)
    db.all(sql1, [range, ppp], (err, products) => {
        if (err) {
            throw err;
        }
        db.all(sql2, [], (err, categories) => {
            if (err) {
                throw err;
            }
            let pa = products[0].total;

            res.render('shop', { products: products, categories: categories, ppp: ppp, activepage: activepage, productamount: pa });
        });

    });
});





























router.get('/test', function (req, res, next) {
    //res.render('test', {title:"Test /test"} );
    res.json({ name: "Markus" })
})

router.get('/getpage/:page', function (req, res, next) {
    let page = req.params.page;
    res.render(page, { title: "HEMSIDA" });
})



router.get('/getcategoryproducts/:id/:page', function (req, res, next) {
    let id = req.params.id;
    let page = req.params.page;
    range = ppp * (page - 1)
    console.log(id, page)
    if (id == 0) {
        let sql = `SELECT *,(SELECT count(*) from products) as total FROM products LIMIT ?,?`;
        console.log(sql, range, ppp)
        db.all(sql, [range, ppp], (err, products) => {
            if (err) {
                throw err;
            }
            res.json(products)
        })

    } else {

        let sql = `SELECT *,(SELECT count(*) FROM products, product_categories 
    WHERE product_categories.c_id=? AND products.id=product_categories.p_id) as total FROM products, product_categories 
  WHERE product_categories.c_id=? AND products.id=product_categories.p_id LIMIT ?,?
  `
        console.log(sql)
        db.all(sql, [id, id, range, ppp], (err, products) => {
            if (err) {
                throw err;
            }
            res.json(products)
        })

    }
})

router.get("/getproduct/:id", function (req, res, next) {
    let id = req.params.id;
    let sql = "SELECT * FROM products WHERE id=?";
    db.get(sql, [id], (err, product) => {
        if (err) {
            throw err;
        }
        res.json(product)
    })
})
module.exports = router;
