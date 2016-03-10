'use strict';

angular.module('mudServerApp', [
        'mudServerApp.auth',
        'mudServerApp.admin',
        'mudServerApp.constants',
        'mudServerApp.game',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'btford.socket-io',
        'ui.router',
        'ui.bootstrap',
        'validation.match'        
    ])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
