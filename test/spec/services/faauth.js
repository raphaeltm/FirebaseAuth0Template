'use strict';

describe('Service: FAAuth', function () {

  // load the service's module
  beforeEach(module('auth0FirebaseTemplateApp'));

  // instantiate service
  var FAAuth;
  beforeEach(inject(function (_FAAuth_) {
    FAAuth = _FAAuth_;
  }));

  it('should do something', function () {
    expect(!!FAAuth).toBe(true);
  });

});
