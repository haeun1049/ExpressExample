var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('include/home', { title: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('include/about', { title: 'about' });
});

router.get('/client', function(req, res, next) {
  res.render('include/client', { title: 'client' });
});

router.get('/contact', function(req, res, next) {
  res.render('include/contact', { title: 'contact' });
});

// database 셋팅
let client = mysql.createConnection({
  user: 'root',
  password: '111111',
  database: 'my_sql'
})

module.exports = router;
