'use strict';

angular.module('mudServerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                template: '<main></main>'
            });
    });
