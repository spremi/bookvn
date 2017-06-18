'use strict';

describe('Directive: bkvnBook', function () {

  // load the directive's module and view
  beforeEach(module('bookVnApp'));
  beforeEach(module('app/bkvn-book/bkvn-book.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bkvn-book></bkvn-book>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bkvnBook directive');
  }));
});