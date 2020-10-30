var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/pop')

router.get('/', ctrl.home);

router.get('/about', ctrl.about);

router.get('/store', ctrl.store);

router.get('/new', ctrl.newForm);

router.post('/', ctrl.create);

router.get('/map', ctrl.showMap);



module.exports = router;
