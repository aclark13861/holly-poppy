var express = require('express');
var router = express.Router();
var Person = require('../models/poppy.js')

const ctrl = require('../controllers/pop')

router.get('/users', ctrl.users);

router.get('/', ctrl.home);

router.get('/about', ctrl.about);

router.get('/store', ctrl.store);

router.get('/new', ctrl.newForm);

router.post('/users', ctrl.create);

router.get('/map', ctrl.showMap);



module.exports = router;
