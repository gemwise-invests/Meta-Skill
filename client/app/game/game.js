'use strict';

angular.module('mudServerApp.game', [
    'mudServerApp.auth',
    'ui.router'
]);

angular.module('mudServerApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('game', {
                url: '/game',
                templateUrl: 'app/game/game.html',
                controller: 'GameController',
                controllerAs: 'game',
                authenticate: 'game'
            });
    });
