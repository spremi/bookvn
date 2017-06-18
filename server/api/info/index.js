//
// [BookVn] server/api/info/index.js
//
// Defines routes for endpoint 'info'
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

var express = require('express');
var controller = require('./info.controller');

var router = express.Router();

router.get('/subjects', controller.subjectInfo);
router.get('/', controller.index);

module.exports = router;
