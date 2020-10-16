var express = require('express');
var router = express.Router();

const ctrl = require('../controllers/todos')

/* GET users listing. */
router.get('/', ctrl.home)

module.exports = router;
