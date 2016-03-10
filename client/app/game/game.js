'use strict';
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
