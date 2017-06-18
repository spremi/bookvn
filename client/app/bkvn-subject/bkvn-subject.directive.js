'use strict';

angular.module('bookVnApp')
  .directive('bkvnSubject', function () {
    return {
      templateUrl: 'app/bkvn-subject/bkvn-subject.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
