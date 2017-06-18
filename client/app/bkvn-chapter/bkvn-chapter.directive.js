'use strict';

angular.module('bookVnApp')
  .directive('bkvnChapter', function () {
    return {
      templateUrl: 'app/bkvn-chapter/bkvn-chapter.html',
      restrict: 'E',
      link: function () {
      }
    };
  });
