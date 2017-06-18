'use strict';

describe('Directive: bkvnSubject', function () {

  // load the directive's module and view
  beforeEach(module('bookVnApp'));
  beforeEach(module('app/bkvn-subject/bkvn-subject.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bkvn-subject></bkvn-subject>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bkvnSubject directive');
  }));
});