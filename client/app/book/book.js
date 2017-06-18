//
// [BookVn] client/app/book/book.js
//
// Describes state 'book'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/book/:sub',
        views: {
          'header': {
            templateUrl: 'templates/app-header.html',
            controller: 'AppHeaderCtrl'
          },
          'footer': {
            templateUrl: 'templates/app-footer.html',
            controller: 'AppFooterCtrl'
          },
          '': {
            templateUrl: 'app/book/book.html',
            controller: 'BookCtrl'
          }
        },
        resolve: {
          BookList: function ($stateParams, BookSvc) {
            return BookSvc.list($stateParams.sub);
          }
        }
      });
  });
