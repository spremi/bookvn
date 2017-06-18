//
// [BookVn] client/app/page/page.js
//
// Describes state 'page'.
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
      .state('page', {
        url: '/page/:sub/:bk/:ch/:f/:l/:s',
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
            templateUrl: 'app/page/page.html',
            controller: 'PageCtrl'
          }
        }
      });
  });
