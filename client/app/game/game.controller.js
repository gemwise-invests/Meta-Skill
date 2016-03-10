'use strict';

class GameController {

    constructor($http, $scope, socket) {
        this.test = 'Doge was here';
    }

}
angular.module('mudServerApp.game')
    .controller('GameController', GameController);


