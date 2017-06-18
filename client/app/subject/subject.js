//
// [BookVn] client/app/subject/subject.js
//
// Describes state 'subject'.
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
      .state('subject', {
        url: '/subject',
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
            templateUrl: 'app/subject/subject.html',
            controller: 'SubjectCtrl'
          }
        },
        resolve: {
          SubjectList: function (SubjectSvc) {
            return SubjectSvc.list();
          }
        }
      });
  });
