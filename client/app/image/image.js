//
// [BookVn] client/app/image/image.js
//
// Describes state 'image'.
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
      .state('image', {
        url: '/image/:sub/:bk/:ch/:pg',
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
            templateUrl: 'app/image/image.html',
            controller: 'ImageCtrl'
          }
        },
      });
  });
