//
// [BookVn] client/app/bkvn-chapter/bkvn-chapter.directive.js
//
// Implements directive 'bkvn-chapter'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnChapter', function () {
    return {
      scope: {
        chapter: '<'
      },
      templateUrl: 'app/bkvn-chapter/bkvn-chapter.html',
      restrict: 'E',
      controller: function ($scope, $stateParams) {
        $scope.arg = {
          sub: $stateParams.sub,
          bk: $stateParams.bk,
          ch: $scope.chapter.id,
          f: $scope.chapter.first,
          l: $scope.chapter.last,
          s: $scope.chapter.step
        };
      }
    };
  });
