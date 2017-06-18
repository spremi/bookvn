'use strict';

angular.module('bookVnApp')
  .directive('bkvnBook', function () {
    return {
      templateUrl: 'app/bkvn-book/bkvn-book.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
