'use strict';

describe('Service: FAFirebaseArray', function () {

  // load the service's module
  beforeEach(module('auth0FirebaseTemplateApp'));

  // instantiate service
  var FAFirebaseArray;
  beforeEach(inject(function (_FAFirebaseArray_) {
    FAFirebaseArray = _FAFirebaseArray_;
  }));

  it('should do something', function () {
    expect(!!FAFirebaseArray).toBe(true);
  });

});
