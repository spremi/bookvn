//
// [BookVn] client/app/ChapterSvc/ChapterSvc.service.js
//
// Implements service 'ChapterSvc.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .service('ChapterSvc', function ($q, $http) {

    /**
     * Encapsulates list of chapters configured for a book
     * Flag 'resolved' is used to avoid repeated $http.get(),
     * when no chapter was configured.
     */
    var Chapters = {
      subjectId: '',
      bookId: '',
      list: [],
      resolved: false
    };


    /**
     * Get list of chapters in a book.
     */
    this.list = function (subjectId, bookId) {
      var deferred = $q.defer();

      if ((Chapters.resolved) &&
          (Chapters.subjectId === subjectId) &&
          (Chapters.bookId === bookId) &&
          (Object.keys(Chapters.list).length !== 0)) {
        return $q.when(Chapters.list);
      }

      Chapters.resolved = false;
      Chapters.subjectId = subjectId;
      Chapters.bookId = bookId;

      var query = '/api/info/subject/' + subjectId + '/book/' + bookId + '/chapters';

      $http.get(query).then(
        function (result) {
          Chapters.list = result.data.chapters;

          //
          // Inject 'step' into every chapter.
          //
          for (var i = 0; i < Chapters.list.length; i++) {
            Chapters.list[i].step = result.data.step;
          }

          Chapters.resolved = true;

          deferred.resolve(Chapters.list);
        }, function () {
          deferred.reject();
        });

      return deferred.promise;
    };
  });
