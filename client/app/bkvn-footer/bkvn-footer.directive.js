'use strict';

angular.module('bookVnApp')
  .directive('bkvnFooter', function () {
    return {
      templateUrl: 'app/bkvn-footer/bkvn-footer.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
