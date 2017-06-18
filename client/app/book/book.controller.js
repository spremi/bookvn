//
// [BookVn] client/app/book/book.controller.js
//
// Implements controller for state 'book'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .controller('BookCtrl', function ($scope, BookList) {
    $scope.Books = BookList;
  });
