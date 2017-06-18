//
// [BookVn] client/app/PageSvc/PageSvc.service.js
//
// Implements service 'PageSvc.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .service('PageSvc', function () {

    /**
     * Encapsulates list of pages in a chapter
     */
    var Pages = {
      subjectId: '',
      bookId: '',
      chapterId: '',
      list: []
    };

    /**
     * Initialize the pages for specified chapter
     */
    this.init = function (subjectId, bookId, chapterId, first, last, step) {
      Pages.subjectId = subjectId;
      Pages.bookId    = bookId;
      Pages.chapterId = chapterId;
      Pages.list      = [];

      var temp = [];

      for (var pg = first; pg <= last; pg += step) {
        temp.push(pg);
      }

      for (var i = 0; i < temp.length; i++) {
        var page = {
          self: temp[i],
          prev: (i === 0 ? null : temp[i - 1]),
          next: (i === (temp.length - 1) ? null : temp[i + 1]),
        };

        Pages.list.push(page);
      }
    };

    /**
     * Returns list of pages for specified chapter
     */
    this.list = function (subjectId, bookId, chapterId) {
      if ((Pages.subjectId === subjectId) &&
          (Pages.bookId === bookId) &&
          (Pages.chapterId === chapterId)) {
        return Pages.list;
      } else {
        return [];
      }
    };

    /**
     * Finds index of specified page in the list
     */
    var pgIndex = function (num) {
      var found = false;
      var index = -1;

      num = parseInt(num);

      for (var i = 0; (!found) && (i < Pages.list.length); i++) {
        if (Pages.list[i].self === num) {
          found = true;
          index = i;
        }
      }

      return index;
    };


    /**
     * Returns 'previous' page, if it exists
     */
    this.prev = function (subjectId, bookId, chapterId, num) {
      if ((Pages.subjectId === subjectId) &&
          (Pages.bookId === bookId) &&
          (Pages.chapterId === chapterId) &&
          (Pages.list.length > 0)) {
        var idx = pgIndex(num);

        if ((idx !== -1) && (idx !== 0)) {
          return Pages.list[idx - 1].self;
        }
      }

      return null;
    };

    /**
     * Returns 'next' page, if it exists
     */
    this.next = function (subjectId, bookId, chapterId, num) {
      if ((Pages.subjectId === subjectId) &&
          (Pages.bookId === bookId) &&
          (Pages.chapterId === chapterId) &&
          (Pages.list.length > 0)) {
        var idx = pgIndex(num);

        if ((idx !== -1) && (idx < (Pages.list.length - 1))) {
          return Pages.list[idx + 1].self;
        }
      }

      return null;
    };
  });
