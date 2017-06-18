'use strict';

describe('Service: ChapterSvc', function () {

  // load the service's module
  beforeEach(module('bookVnApp'));

  // instantiate service
  var ChapterSvc;
  beforeEach(inject(function (_ChapterSvc_) {
    ChapterSvc = _ChapterSvc_;
  }));

  it('should do something', function () {
    expect(!!ChapterSvc).toBe(true);
  });

});
