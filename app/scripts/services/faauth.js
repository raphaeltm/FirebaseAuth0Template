'use strict';

/**
 * @ngdoc service
 * @name auth0FirebaseTemplateApp.FAAuth
 * @description
 * # FAAuth
 * Service in the auth0FirebaseTemplateApp.
 */
angular.module('auth0FirebaseTemplateApp')
    .service('FAAuth', function ($firebaseAuth, auth, store, FAFirebase, $window, $rootScope, $location) {
        var self = this;

        self.startPath = null;
        /**
         * The authencation data for the user
         * @type {null}
         */
        self.authData = null;

        /**
         * auth object
         */
        self.fbAuthObj = $firebaseAuth(FAFirebase.baseRef);

        /**
         * Data received from firebase auth
         * @type {null}
         */
        self.fbAuthData = null;

        /**
         * Firebase users ref.
         */
        self.usersRef = FAFirebase.baseRef.child('users');


        /**
         *
         * @param profile
         * @param token
         */
        self.postAuth = function (profile, token) {
            self.authData = profile;
            self.usersRef.child(profile.user_id).update(profile);
            self.authToken = token;
            store.set('profile', profile);
            store.set('token', token);
            $rootScope.$emit('authed');
            auth.getToken({'api': 'firebase', 'scope': 'openid name email'}).then(function (data) {
                self.firebaseTokenData = data;
                self.fbAuthObj.$authWithCustomToken(self.firebaseTokenData.id_token).then(function (data) {
                    self.fbAuthData = data;
                    self.goToOriginalUrl();
                });
            });
        };

        /**
         * Authenticate
         */
        self.authenticate = function () {
            auth.signin({}, function (profile, token) {
                self.postAuth(profile, token);
                $location.path('/');
            }, function () {
                $window.alert('OOOPS! Something went wrong.');
            });
        };

        /**
         * Deauthenticate
         */
        self.deauthenticate = function () {
            auth.signout();
            store.remove('profile');
            store.remove('token');
            self.authData = null;
            self.authToken = null;
            $rootScope.$emit('deauthed');
        };


        /**
         * Sends the user to the path they first tried to access.
         */
        self.goToOriginalUrl = function () {
            if (self.startPath) {
                $timeout(function () {
                    $location.path(self.startPath);
                }, 10);
            }
        };


    });
