//
// [BookVn] client/app/bkvn-page/bkvn-page.directive.js
//
// Implements directive 'bkvn-page'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnPage', function () {
    return {
      scope: {
        page: '<'
      },
      templateUrl: 'app/bkvn-page/bkvn-page.html',
      restrict: 'E',
      controller: function ($scope, $stateParams) {
        $scope.arg = {
          sub: $stateParams.sub,
          bk: $stateParams.bk,
          ch: $stateParams.ch,
          pg: $scope.page.self
        };
      }
    };
  });
