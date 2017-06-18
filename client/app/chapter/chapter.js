//
// [BookVn] client/app/chapter/chapter.js
//
// Describes state 'chapter.
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
      .state('chapter', {
        url: '/chapter/:sub/:bk',
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
            templateUrl: 'app/chapter/chapter.html',
            controller: 'ChapterCtrl'
          }
        },
        resolve: {
          ChapterList: function ($stateParams, ChapterSvc) {
            return ChapterSvc.list($stateParams.sub, $stateParams.bk);
          }
        }

      });
  });
