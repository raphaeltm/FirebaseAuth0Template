'use strict';

/**
 * @ngdoc overview
 * @name auth0FirebaseTemplateApp
 * @description
 * # auth0FirebaseTemplateApp
 *
 * Main module of the application.
 */
var FAapp = angular
    .module('auth0FirebaseTemplateApp', [
        'firebase',
        'auth0',
        'angular-storage',
        'angular-jwt'
    ]);


FAapp.config(function (authProvider, jwtInterceptorProvider, $httpProvider) {
    authProvider.init({
        'domain': 'YOUR AUTH0 DOMAIN HERE',
        'clientID': 'YOUR AUTH0 CLIENT ID HERE'
    });

    // We're annotating this function so that the `store` is injected correctly when this file is minified
    jwtInterceptorProvider.tokenGetter = ['store', function (store) {
        // Return the saved token
        return store.get('token');
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
});


FAapp.run(function (auth, $rootScope, FAAuth) {
    auth.hookEvents();
    $rootScope.FAAuth = FAAuth;
});