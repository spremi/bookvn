'use strict';

describe('Controller: ImageCtrl', function () {

  // load the controller's module
  beforeEach(module('bookVnApp'));

  var ImageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImageCtrl = $controller('ImageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
