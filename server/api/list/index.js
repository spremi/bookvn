//
// [BookVn] server/api/list/index.js
//
// Defines routes for endpoint 'list'
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

var express = require('express');
var controller = require('./list.controller');

var router = express.Router();

router.get('/subject/:sub/books', controller.bookList);
router.get('/subjects', controller.subjectList);
router.get('/', controller.index);

module.exports = router;
