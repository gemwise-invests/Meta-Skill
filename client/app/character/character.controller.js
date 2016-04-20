'use strict';

class CharacterController {

    constructor($scope, $http, character, _) {
        this.avatar = character.current;
        this.bestPlayer = character.fakeBestPlayer();
        this.statsLabels = _.keys(this.avatar.stats).sort();
        this.series = ['You', `Strongest Player: ${this.bestPlayer.name}`];
        this.stats = [
            _.values(this.avatar.stats),
            _.values(this.bestPlayer.stats)
        ];
        this.freeXp = 2;

        this.labels = ["Experience", "Required", "Gained by looting"];
        this.data = [300, 500, 100];
        this.colors = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        console.warn('current avatar', this.avatar)
    }

    $onInit() {
        console.log('oninit ok')
    }

    pickAvatar(avatar) {
        console.warn('avarat picked', avatar)
        console.log(this.avatar)
    }

    addStats(statsName) {
        this.avatar.stats[statsName] += 10
        this.freeXp -= 1
        this.stats = [
            _.values(this.avatar.stats),
            _.values(this.bestPlayer.stats)
        ]
    }
}

angular.module('mudServerApp.character')
    .controller('CharacterController', CharacterController);


