'use strict';

var router = require('express').Router();

module.exports = router;

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api2!' });
});