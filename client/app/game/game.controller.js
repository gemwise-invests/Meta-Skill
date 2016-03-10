'use strict';

console.log("1");
class GameController {

    constructor($http, $scope, socket) {
        this.test = 'Doge was here';
    }

}
angular.module('mudServerApp')
    .component('game', {
        templateUrl: 'app/game/game.html',
        controller: GameController
    });


