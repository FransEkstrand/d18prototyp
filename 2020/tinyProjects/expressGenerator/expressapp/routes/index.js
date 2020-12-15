var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/getpage/:page', function (req, res, next) {
  let page = req.params.page;

  res.render(page, {
    title: 'frans'
  });

})



// router.get('/:id', function (req, res, next) {
//   res.render('index', {
//     title: 'Express'
//   });
// });

module.exports = router;