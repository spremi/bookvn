'use strict';

angular.module('bookVnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('image', {
        url: '/image',
        templateUrl: 'app/image/image.html',
        controller: 'ImageCtrl'
      });
  });