'use strict';

angular.module('bookVnApp')
  .directive('bkvnImage', function () {
    return {
      templateUrl: 'app/bkvn-image/bkvn-image.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
