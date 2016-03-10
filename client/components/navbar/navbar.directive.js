'use strict';

angular.module('mudServerApp')
    .directive('navbar', () => ({
        templateUrl: 'components/navbar/navbar.html',
        restrict: 'E',
        controller: 'NavbarController',
        controllerAs: 'nav'
    }));
