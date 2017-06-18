'use strict';

describe('Directive: bkvnStatus', function () {

  // load the directive's module and view
  beforeEach(module('bookVnApp'));
  beforeEach(module('app/bkvn-status/bkvn-status.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bkvn-status></bkvn-status>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bkvnStatus directive');
  }));
});