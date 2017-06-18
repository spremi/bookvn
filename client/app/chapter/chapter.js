'use strict';

angular.module('bookVnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chapter', {
        url: '/chapter',
        templateUrl: 'app/chapter/chapter.html',
        controller: 'ChapterCtrl'
      });
  });