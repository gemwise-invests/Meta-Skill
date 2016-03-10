'use strict';

class NavbarController {
    //start-non-standard
    menu = [{
        'title': 'Home',
        'state': 'main'
    }, {
       'title': 'Game' ,
       'state': 'game'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }
}

angular.module('mudServerApp')
    .controller('NavbarController', NavbarController);
