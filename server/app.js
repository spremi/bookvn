//
// [BookVn] server/app.js
//
// Entry point to server application.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//
// Invariants for data in JSON files
//
global.SIGN_SUBJECTS  = 'BookVn.SUBJECTS';
global.SIGN_BOOKS     = 'BookVn.BOOKS';
global.SIGN_CHAPTERS  = 'BookVn.CHAPTERS';

var express = require('express');
var config = require('./config/environment');

//
// Define path to base of the application
//
global.BASE_APP = config.root;

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
