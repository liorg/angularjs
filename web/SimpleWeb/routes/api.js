'use strict';

var router = require('express').Router();
var fs = require('fs');

module.exports = router;

router.get('/', function (req, res) {
   var config = require('./users.json');
   // var config = JSON.parse(fs.readFileSync('./routes/users.json', 'utf8'));
   res.json({ message: 'hooray! welcome to our api25!' + config.firstName });
});