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
 * Returns list of books for a subjects
 *
 * Each directory in 'PathCabinet/subject' corresponds to a book.
 */
exports.bookList = function (req, res) {
  var subject = req.params.sub;

  var pathSubject = path.join(PathCabinet, subject);

  fs.readdir(pathSubject,
    function (err, items) {
      if (err) {
        res.status(500)
          .send('list: books: Error reading directory.');

        return;
      }

      var books = [];

      for (var i = 0; i < items.length; i++) {
        var stat = fs.statSync(path.join(pathSubject, items[i]));

        if (stat.isDirectory()) {
          books.push(items[i]);
        }
      }

      res.status(200).json(books);
    });
};


/**
 * Get list of pages in a book.
 *
 * All pages are images (*.jpg | *.png)
 */
exports.pageList = function(req, res) {
  var subject = req.params.sub;
  var book = req.params.bk;

  var pathBook = path.join(PathCabinet, subject, book);

  fs.readdir(pathBook,
    function (err, items) {
      if (err) {
        res.status(500)
          .send('list: pages: Error reading directory (' + subject + '/' + book + ').');

        return;
      }

      var pages = [];

      for (var i = 0; i < items.length; i++) {
        var stat = fs.statSync(path.join(pathBook, items[i]));

        if (stat.isFile()) {
          var ext = path.extname(items[i]).toLowerCase();

          if ((ext === ".jpg") || (ext === ".png")) {
            pages.push(items[i]);
          }
        }
      }

      res.status(200).json(pages);
    });
};

/**
 * Default route - leave as-is
 */
exports.index = function(req, res) {
  res.json([]);
};
