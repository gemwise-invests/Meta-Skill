'use strict';

class MainController {

    constructor($scope, $state, Auth) {
        this.$scope = $scope;
        this.$state = $state;
        this.Auth = Auth;
    }

    pickAvatar(avatar) {
        let that = this.$parent.$ctrl;
        that.Auth.changeAvatar(avatar)
            .then(resp => {
                that.$state.go('game');
            })
            .catch(console.error);
    }
}

angular.module('mudServerApp')
    .component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController
    })
