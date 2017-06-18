'use strict';

describe('Service: BookSvc', function () {

  // load the service's module
  beforeEach(module('bookVnApp'));

  // instantiate service
  var BookSvc;
  beforeEach(inject(function (_BookSvc_) {
    BookSvc = _BookSvc_;
  }));

  it('should do something', function () {
    expect(!!BookSvc).toBe(true);
  });

});
