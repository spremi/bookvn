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
      scope: {},
      templateUrl: 'app/bkvn-header/bkvn-header.html',
      restrict: 'E',
      controller: function ($scope, $state, $stateParams, ChapterSvc) {

        var state = $state.$current.name;

        $scope.argSubject = null;
        $scope.argBook    = null;
        $scope.argChapter = null;
        $scope.argPage    = null;

        //
        // Set arguments for all previous states
        //
        switch(state) {
          case 'book':
            $scope.argSubject = {};
            break;

          case 'chapter':
            $scope.argSubject = {};

            $scope.argBook = {
              sub: $stateParams.sub
            };
            break;

          case 'page':
            $scope.argSubject = {};

            $scope.argBook = {
              sub: $stateParams.sub,
              bk: $stateParams.bk
            };

            $scope.argChapter = {
              sub: $stateParams.sub,
              bk: $stateParams.bk
            };
            break;

          case 'image':
            $scope.argSubject = {};

            $scope.argBook = {
              sub: $stateParams.sub
            };

            $scope.argChapter = {
              sub: $stateParams.sub,
              bk: $stateParams.bk
            };

            ChapterSvc.list($stateParams.sub, $stateParams.bk).then(
              function (data) {
                var chapter = data.filter(function (o) {
                                return o.id === $stateParams.ch;
                              });

                $scope.argPage = {
                  sub: $stateParams.sub,
                  bk: $stateParams.bk,
                  ch: $stateParams.ch,
                  f: chapter[0].first,
                  l: chapter[0].last,
                  s: chapter[0].step
                };
              });
            break;

          default:
            break;
        }
      }
    };
  });
