//
// [BookVn] client/app/bkvn-header/bkvn-header.directive.js
//
// Implements directive 'bkvn-header'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnHeader', function () {
    return {
      templateUrl: 'app/bkvn-header/bkvn-header.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
