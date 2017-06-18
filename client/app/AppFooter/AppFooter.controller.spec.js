'use strict';

describe('Controller: AppFooterCtrl', function () {

  // load the controller's module
  beforeEach(module('bookVnApp'));

  var AppFooterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppFooterCtrl = $controller('AppFooterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
