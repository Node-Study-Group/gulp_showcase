var express = require('express');
var router = express.Router();
var ctrl = require('./controller.js')

module.exports = router;

router.get('/', ctrl.index);