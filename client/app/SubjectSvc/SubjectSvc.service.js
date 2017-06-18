//
// [BookVn] client/app/SubjectSvc/SubjectSvc.service.js
//
// Implements service 'SubjectSvc.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .service('SubjectSvc', function ($q, $http) {

    /**
     * Encapsulates list of subjects configured.
     * Flag 'resolved' is used to avoid repeated $http.get(),
     * when no subject was configured.
     */
    var Subjects = {
      list: [],
      resolved: false
    };


    /**
     * Get list of subjects.
     */
    this.list = function () {
      var deferred = $q.defer();

      //
      // Return list, if already available.
      //
      if (Subjects.resolved && (Object.keys(Subjects).length !== 0)) {
        return $q.when(Subjects.list);
      }

      Subjects.resolved = false;
      Subjects.list = [];

      $http.get('/api/info/subjects').then(
        function (result) {
          Subjects.list = result.data.subjects;
          Subjects.resolved = true;

          deferred.resolve(Subjects.list);
        }, function () {
          deferred.reject();
        });

      return deferred.promise;
    };

    /**
     * Get name of the subject for specified 'id'
     */
    this.name = function (subId) {
      if ((Subjects.resolved) && (Subjects.list.length > 0)) {
        var sub = Subjects.list.filter(function (s) {
                    return (s.id === subId);
                  });

        if (Array.isArray(sub) && (sub.length > 0)) {
          return sub[0].name;
        }
      }

      return '';
    };
  });
