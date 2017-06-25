'use strict';

angular.module('bookVnApp')
  .controller('AppHeaderCtrl', function ($scope, $state) {
    //
    // Show version?
    //
    $scope.vflag = ($state.$current.name === 'main' ? true : false);
  });
