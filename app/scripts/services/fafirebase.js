'use strict';

/**
 * @ngdoc service
 * @name auth0FirebaseTemplateApp.FAFirebase
 * @description
 * # FAFirebase
 * Service in the auth0FirebaseTemplateApp.
 */
angular.module('auth0FirebaseTemplateApp')
    .service('FAFirebase', function () {
        var self = this;

        self.baseRef = new Firebase('https://brilliant-inferno-8802.firebaseio.com/');

        window.FAFirebase = self;
    });
