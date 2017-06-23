//
// [BookVn] client/app/bkvn-status/bkvn-status.directive.js
//
// Implements directive 'bkvn-status'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .directive('bkvnStatus', function () {
    return {
      scope: {},
      templateUrl: 'app/bkvn-status/bkvn-status.html',
      restrict: 'E',
      controller: function ($scope, $state, $stateParams,
                            SubjectSvc, BookSvc, ChapterSvc) {
        var state  = $state.$current.name;

        $scope.subject  = null;
        $scope.book     = null;
        $scope.chapter  = null;
        $scope.page     = null;

        //
        // Set arguments for all previous states
        //
        switch(state) {
          case 'book':
            $scope.subject = SubjectSvc.name($stateParams.sub);
            break;

          case 'chapter':
            $scope.subject = SubjectSvc.name($stateParams.sub);
            $scope.book    = BookSvc.title($stateParams.sub, $stateParams.bk);
            break;

          case 'page':
            $scope.subject = SubjectSvc.name($stateParams.sub);
            $scope.book    = BookSvc.title($stateParams.sub, $stateParams.bk);
            $scope.chapter = ChapterSvc.title($stateParams.sub, $stateParams.bk, $stateParams.ch);
            break;

          case 'image':
            $scope.subject = SubjectSvc.name($stateParams.sub);
            $scope.book    = BookSvc.title($stateParams.sub, $stateParams.bk);
            $scope.chapter = ChapterSvc.title($stateParams.sub, $stateParams.bk, $stateParams.ch);
            $scope.page    = $stateParams.pg;
            break;

          default:
            break;
        }
      }
    };
  });
