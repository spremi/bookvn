'use strict';

describe('Directive: bkvnPage', function () {

  // load the directive's module and view
  beforeEach(module('bookVnApp'));
  beforeEach(module('app/bkvn-page/bkvn-page.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bkvn-page></bkvn-page>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bkvnPage directive');
  }));
});