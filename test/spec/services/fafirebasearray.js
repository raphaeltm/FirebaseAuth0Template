'use strict';

describe('Service: FAFirebaseArray', function () {

  // load the service's module
  beforeEach(module('auth0FirebaseTemplateApp'));

  // instantiate service
  var FAFirebaseArray;
  beforeEach(inject(function (_FAFirebaseArray_) {
    FAFirebaseArray = _FAFirebaseArray_;
    FAFirebaseArray('https://addo-local.firebaseio.com/')
  }));

  it('should do something', function () {
    expect(!!FAFirebaseArray).toBe(true);
  });

  it('should be function', function(){
    expect(typeof FAFirebaseArray).toEqual('function');
  });

  it('should return an array', function(){
    //expect(FAFirebaseArray)
  });

});
