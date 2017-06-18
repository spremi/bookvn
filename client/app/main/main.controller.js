//
// [BookVn] client/app/main/main.controller.js
//
// Implements controller for state 'main'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .controller('MainCtrl', function ($scope, $state, $timeout) {

    /**
     * Transition to next state.
     */
    $scope.next = function () {
      $state.go('subject');
    };

    /**
     * Handle click on 'start' button
     */
    $scope.onStart = function () {
      $timeout.cancel($scope.timer);
      $scope.next();
    };

    //
    // Start timer waiting for user to click 'start' button
    //
    $scope.timer = $timeout($scope.next, 5000);
  });
