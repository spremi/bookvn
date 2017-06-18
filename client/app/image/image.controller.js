//
// [BookVn] client/app/image/image.controller.js
//
// Implements controller for state 'iamge'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .controller('ImageCtrl', function ($scope, $stateParams, PageSvc) {
    $scope.self = $stateParams.pg;
    $scope.argPrev = null;
    $scope.argNext = null;

    var prev = PageSvc.prev($stateParams.sub, $stateParams.bk, $stateParams.ch, $stateParams.pg);
    var next = PageSvc.next($stateParams.sub, $stateParams.bk, $stateParams.ch, $stateParams.pg);

    if (prev !== null) {
      $scope.argPrev = {
        sub: $stateParams.sub,
        bk: $stateParams.bk,
        ch: $stateParams.ch,
        pg: prev
      };
    }

    if (next !== null) {
      $scope.argNext = {
        sub: $stateParams.sub,
        bk: $stateParams.bk,
        ch: $stateParams.ch,
        pg: next
      };
    }
  });
