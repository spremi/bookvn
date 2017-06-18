'use strict';

describe('Directive: bkvnChapter', function () {

  // load the directive's module and view
  beforeEach(module('bookVnApp'));
  beforeEach(module('app/bkvn-chapter/bkvn-chapter.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bkvn-chapter></bkvn-chapter>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bkvnChapter directive');
  }));
});