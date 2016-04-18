'use strict';

class MainController {

    constructor($scope, $state, Auth) {
        this.$scope = $scope;
        this.$state = $state;
        this.Auth = Auth;
    }

    pickAvatar(avatar) {
        this.Auth.changeAvatar(avatar)
            .then(resp => {
                this.$state.go('game');
            })
            .catch(console.error);
    }
}

angular.module('mudServerApp')
    .component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController
    })
