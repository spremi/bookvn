'use strict';

angular.module('bookVnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('video', {
        url: '/video',
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });
  });