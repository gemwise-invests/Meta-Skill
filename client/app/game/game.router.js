'use strict';


angular.module('mudServerApp.game')
    .config(function ($stateProvider) {
        $stateProvider
            .state('game', {
                url: '/game',
                templateUrl: 'app/game/game.html',
                controller: 'GameController',
                controllerAs: 'game'
            });
    });
