//
// [BookVn] client/app/bkvn-subject/bkvn-subject.directive.js
//
// Implements directive 'bkvn-subject'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnSubject', function () {
    return {
      scope: {
        subject: '<'
      },
      templateUrl: 'app/bkvn-subject/bkvn-subject.html',
      restrict: 'E',
      controller: function ($scope) {
        $scope.arg = {
          sub: $scope.subject.id
        };
      }
    };
  });
