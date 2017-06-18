//
// [BookVn] server/api/list/index.js
//
// Implements routes for endpoint 'list'
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

var fs = require('fs');
var path = require('path');

var PathCabinet = path.join(global.BASE_APP, 'server', 'assets', 'cabinet');


/**
 * Returns list of subjects.
 *
 * Each directory in 'PathCabinet' corresponds to a subject.
 */
exports.subjectList = function (req, res) {
  fs.readdir(PathCabinet,
    function (err, items) {
      if (err) {
        res.status(500)
          .send('list: subjects: Error reading directory.');

        return;
      }

      var subjects = [];

      for (var i = 0; i < items.length; i++) {
        var stat = fs.statSync(path.join(PathCabinet, items[i]));

        if (stat.isDirectory()) {
          subjects.push(items[i]);
        }
      }

      res.status(200).json(subjects);
    });
};


/**
 * Default route - leave as-is
 */
exports.index = function(req, res) {
  res.json([]);
};
