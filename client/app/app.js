'use strict';

angular.module('mudServerApp', [
        'mudServerApp.auth',
        'mudServerApp.admin',
        'mudServerApp.constants',
        'mudServerApp.game',
        'mudServerApp.wesnoth',
        'mudServerApp.character',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'btford.socket-io',
        'ui.router',
        'ui.bootstrap',
        'validation.match',
        'chart.js'
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .constant("WesnothTiles.config", {
        path: "bower_components/wesnoth-tiles/tiles/"
    });
