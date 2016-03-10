'use strict';

angular
    .module('mudServerApp.auth', [
        'mudServerApp.constants',
        'mudServerApp.util',
        'ngCookies',
        'ui.router'
    ])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
