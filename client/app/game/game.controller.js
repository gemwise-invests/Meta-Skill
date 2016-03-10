'use strict';

class GameController {

    constructor($http, $scope, socket) {
    }

}

angular.module('mudServerApp')
    .component('game', {
        templateUrl: 'app/game/game.html',
        controller: GameController
    });


