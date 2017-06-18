//
// [BookVn] server/api/info/info.controller.js
//
// Implements routes for endpoint 'info'
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

var fs = require('fs');
var path = require('path');

var PathInfo = path.join(global.BASE_APP, 'server', 'assets', 'info');


/**
 * Get information about the subjects
 */
exports.subjectInfo = function (req, res) {
  var fileName = path.join(PathInfo, "subjects.json");

  fs.readFile(fileName, 'utf8',
    function (err, data) {
      if (err) {
        res.status(500)
          .send('info: subjects: Error reading the file.');

        return;
      }

      try {
        var obj = JSON.parse(data);

        if ((obj.signature !== undefined) &&
          (obj.data !== undefined) &&
          (obj.signature === global.SIGN_SUBJECTS)) {
          res.status(200).json(obj.data);
        } else {
          res.status(500)
            .send('info: subjects: Invalid data.');
        }
      } catch (e) {
        res.status(500)
          .send('info: subjects: Error parsing information.');
      }
    });
};

/**
 * Get information about books for a subject
 */
exports.bookInfo = function (req, res) {
  var subject = req.params.sub;

  var fileName = path.join(PathInfo, subject, 'books.json');

  fs.readFile(fileName, 'utf8',
    function (err, data) {
      if (err) {
        res.status(500)
          .send('info: chapters: Error reading the file.');

        return;
      }

      try {
        var obj = JSON.parse(data);

        if ((obj.signature !== undefined) &&
          (obj.data !== undefined) &&
          (obj.signature === global.SIGN_BOOKS)) {
          res.status(200)
            .json(obj.data);
        } else {
          res.status(500)
            .send('info: chapters: Invalid data.');
        }
      } catch (e) {
        res.status(500)
          .send('info: chapters: Error parsing information.');
      }
    });
};

/**
 * Default route - leave as-is
 */
exports.index = function(req, res) {
  res.json([]);
};
