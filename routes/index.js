var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/pop')

router.get('/users', ctrl.users);

router.get('/', ctrl.home);

router.get('/about', ctrl.about);

router.get('/store', ctrl.store);

router.get('/new', ctrl.newForm);

router.post('/users', ctrl.create);

router.get('/map', ctrl.showMap);

router.get('/contact_send', ctrl.contact_send);
    
router.get('/contact_error', ctrl.contact_error);
    
router.get('/contact', ctrl.contact);
  
router.post('/send', ctrl.send);

router.get('/pass', ctrl.pass);

router.get('/frame', ctrl.frame);

router.get('/check', ctrl.check);

router.post('/payment', ctrl.payment);

module.exports = router;
