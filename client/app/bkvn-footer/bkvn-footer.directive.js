//
// [BookVn] client/app/bkvn-footer/bkvn-footer.directive.js
//
// Implements directive 'bkvn-footer'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnFooter', function () {
    return {
      scope: {},
      templateUrl: 'app/bkvn-footer/bkvn-footer.html',
      restrict: 'E',
      controller: function ($scope) {
        $scope.author = 'Sanjeev Premi';
        $scope.donee  = 'Ananya';
      }
    };
  });
