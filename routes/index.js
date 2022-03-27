var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/page', function(req, res, next) {
//   res.render('docs-page');
// });

router.get('/page', (req, res) => {
     res.render('docs-page');
});


// About route
// app.get('/about', (req, res) => {
//     res.send('Welcome to About Page');
// });
// router.get('/demo7_result', function (req, res, next){
// res.render('demo7');
// });

module.exports = router;
