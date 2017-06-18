'use strict';

angular.module('bookVnApp')
  .directive('bkvnPage', function () {
    return {
      templateUrl: 'app/bkvn-page/bkvn-page.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
