'use strict';

describe('Service: PageSvc', function () {

  // load the service's module
  beforeEach(module('bookVnApp'));

  // instantiate service
  var PageSvc;
  beforeEach(inject(function (_PageSvc_) {
    PageSvc = _PageSvc_;
  }));

  it('should do something', function () {
    expect(!!PageSvc).toBe(true);
  });

});
