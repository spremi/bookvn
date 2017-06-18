//
// [BookVn] client/app/chapter/chapter.controller.js
//
// Implements controller for state 'chapter'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .controller('ChapterCtrl', function ($scope, ChapterList) {
    $scope.Chapters = ChapterList;
  });
