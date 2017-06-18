'use strict';

angular.module('bookVnApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('page', {
        url: '/page',
        templateUrl: 'app/page/page.html',
        controller: 'PageCtrl'
      });
  });