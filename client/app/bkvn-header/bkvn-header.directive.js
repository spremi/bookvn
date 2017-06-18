'use strict';

angular.module('bookVnApp')
  .directive('bkvnHeader', function () {
    return {
      templateUrl: 'app/bkvn-header/bkvn-header.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
