'use strict';

/**
 * @ngdoc service
 * @name auth0FirebaseTemplateApp.FAFirebaseArray
 * @description
 * # FAFirebaseArray
 * Factory in the auth0FirebaseTemplateApp.
 */
angular.module('auth0FirebaseTemplateApp')
    .factory('FAFirebaseArray', function ($firebaseArray) {
        /**
         * Returns a Firebase array with extra parameters to make it match the angular Resource api.
         */
        return function (ref, extension, resource) {
            /**
             * Add custom extension object to default.
             */
            extension = angular.extend({
                '$$added': function (snap) {
                    var obj = new resource(snap.val());
                    obj.$id = snap.key();
                    obj.$resolved = true;
                    obj.$promise = this.$list.$loaded();
                    return obj
                }
            }, extension);

            /**
             * Create the extended firebase resource
             * @type {Function}
             */
            var fb = new $firebaseArray.$extend(extension)(ref);

            fb.$promise = fb.$loaded();
            fb.$resolved = false;

            /**
             * Resolved changed to true after $promise... resolved!
             */
            fb.$promise.then(function () {
                fb.$resolved = true;
            }, function () {
                fb.$resolved = true;
            });
            //return fb
            return [];
        };
    });
