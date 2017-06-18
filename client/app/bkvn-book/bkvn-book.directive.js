//
// [BookVn] client/app/bkvn-book/bkvn-book.directive.js
//
// Implements directive 'bkvn-book'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnBook', function () {
    return {
      scope: {
        book: '<'
      },
      templateUrl: 'app/bkvn-book/bkvn-book.html',
      restrict: 'E',
      controller: function ($scope, $stateParams) {
        $scope.arg = {
          sub: $stateParams.sub,
          bk: $scope.book.id
        };
      }
    };
  });
