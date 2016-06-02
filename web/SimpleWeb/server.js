// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var api = require('./routes/api');
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
app.use(express.static('public'));
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4532;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', api);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);