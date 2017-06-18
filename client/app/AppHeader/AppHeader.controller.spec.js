'use strict';

describe('Controller: AppHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('bookVnApp'));

  var AppHeaderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppHeaderCtrl = $controller('AppHeaderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
