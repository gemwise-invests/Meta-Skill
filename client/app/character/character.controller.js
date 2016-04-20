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
                maxHp: 20,
                hp: 10
            },
            avatarImg: 'techno-viking'
        }

        this.bestPlayer = {
            name: 'Doge',
            level: 3,
            items: ['Doge Coins'],
            stats: {
                str: 20,
                mov: 38,
                agl: 10,
                maxHp: 22,
                hp: 13
            },
            avatarImg: 'doge'
        }
        this.statsLabels = _.keys(this.avatar.stats);
        this.series = ['You', 'Strongest Player'];
        this.stats = [
            _.values(this.avatar.stats),
            _.values(this.bestPlayer.stats)
        ];
        this.colors = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    }

    $onInit() {
        console.log('oninit ok')
    }
}

angular.module('mudServerApp.character')
    .controller('CharacterController', CharacterController);


