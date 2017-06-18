'use strict';

angular.module('bookVnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('subject', {
        url: '/subject',
        templateUrl: 'app/subject/subject.html',
        controller: 'SubjectCtrl'
      });
  });