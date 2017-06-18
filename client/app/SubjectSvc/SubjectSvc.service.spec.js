'use strict';

describe('Service: SubjectSvc', function () {

  // load the service's module
  beforeEach(module('bookVnApp'));

  // instantiate service
  var SubjectSvc;
  beforeEach(inject(function (_SubjectSvc_) {
    SubjectSvc = _SubjectSvc_;
  }));

  it('should do something', function () {
    expect(!!SubjectSvc).toBe(true);
  });

});
