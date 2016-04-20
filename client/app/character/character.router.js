'use strict';


angular.module('mudServerApp.character')
    .config(function ($stateProvider) {
        $stateProvider
            .state('character', {
                url: '/character',
                templateUrl: 'app/character/character.html',
                controller: 'CharacterController',
                controllerAs: 'vm'
            });
    });
