'use strict';

describe('Service: FAFirebase', function () {

  // load the service's module
  beforeEach(module('auth0FirebaseTemplateApp'));

  // instantiate service
  var FAFirebase;
  beforeEach(inject(function (_FAFirebase_) {
    FAFirebase = _FAFirebase_;
  }));

  it('should do something', function () {
    expect(!!FAFirebase).toBe(true);
  });

});
