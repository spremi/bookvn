//
// [BookVn] client/app/page/page.controller.js
//
// Implements controller for state 'page'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .controller('PageCtrl', function ($scope, $stateParams, PageSvc) {

    $scope.NoPages = false;

    PageSvc.init($stateParams.sub,
                  $stateParams.bk,
                  $stateParams.ch,
                  parseInt($stateParams.f),
                  parseInt($stateParams.l),
                  parseInt($stateParams.s));

    $scope.Pages = PageSvc.list($stateParams.sub, $stateParams.bk, $stateParams.ch);

    if ($scope.Pages.length === 0) {
      $scope.NoPages = true;
    }
  });
