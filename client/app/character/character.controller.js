'use strict';

class CharacterController {

    constructor($scope, $http, character, _) {
        this.labels = ["Experience", "Required", "Gained by looting"];
        this.data = [300, 500, 100];
        //TODO from db
        this.avatar = {
            name: 'Techno viking',
            level: 1,
            // pos:
            items: ['Hammer'],
            stats: {
                str: 10,
                mov: 10,
                agl: 10,
                maxHp: 10,
                hp: 10
            },
            avatarImg: 'techno-viking'
        }
    }

    $onInit() {
        console.log('oninit ok')
    }
}

angular.module('mudServerApp.character')
    .controller('CharacterController', CharacterController);


