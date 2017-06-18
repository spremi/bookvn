'use strict';

angular.module('bookVnApp')
  .directive('bkvnStatus', function () {
    return {
      templateUrl: 'app/bkvn-status/bkvn-status.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
