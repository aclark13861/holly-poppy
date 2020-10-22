var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/todos')

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home page' });
});

router.get('/about', ctrl.about);

router.get('/store', ctrl.store);

module.exports = router;
