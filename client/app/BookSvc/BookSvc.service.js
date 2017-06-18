//
// [BookVn] client/app/BookSvc/BookSvc.service.js
//
// Implements service 'BookSvc.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .service('BookSvc', function ($q, $http) {

    /**
     * Encapsulates list of books configured for a subject.
     * Flag 'resolved' is used to avoid repeated $http.get(),
     * when no book was configured.
     */
    var Books = {
      subjectId: '',
      list: [],
      resolved: false
    };


    /**
     * Get list of books associated with a subject.
     */
    this.list = function (subjectId) {
      var deferred = $q.defer();

      if ((Books.resolved) &&
          (Books.subjectId === subjectId) &&
          (Object.keys(Books.list).length !== 0)) {
        return $q.when(Books.list);
      }

      Books.resolved  = false;
      Books.subjectId = subjectId;

      var query = '/api/info/subject/' + subjectId + '/books';

      $http.get(query).then(
        function (result) {
          Books.list = result.data.books;
          Books.resolved = true;

          deferred.resolve(Books.list);
        }, function () {
          deferred.reject();
        });

      return deferred.promise;
    };

    /**
     * Get title of the book for specified subject & book 'id'
     */
    this.title = function (subId, bkId) {
      if ((Books.resolved) &&
          (Books.subjectId === subId) &&
          (Books.list.length > 0)) {
        var bk = Books.list.filter(function (b) {
                    return (b.id === bkId);
                  });

        if (Array.isArray(bk) && (bk.length > 0)) {
          return bk[0].title;
        }
      }

      return '';
    };
  });
