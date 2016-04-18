'use strict';

class MainController {

    constructor($scope, $state) {
        this.$scope = $scope;
        this.$state = $state;
    }

    pickAvatar(avatar) {
        console.warn(avatar)
        this.$state.go('game')
    }
}

angular.module('mudServerApp')
    .component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController
    })
