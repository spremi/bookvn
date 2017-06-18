//
// [BookVn] client/app/subject/subject.controller.js
//
// Implements controller for state 'subject'.
//
// (c) 2017 Sanjeev Premi (spremi@ymail.com)
//
// SPDX-License-Identifier: BSD-3-Clause
//                          (http://spdx.org/licenses/BSD-3-Clause.html)
//


'use strict';

angular.module('bookVnApp')
  .controller('SubjectCtrl', function ($scope, SubjectList) {
    $scope.Subjects = SubjectList;
  });
