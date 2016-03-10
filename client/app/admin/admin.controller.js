'use strict';

class AdminController {
    constructor(User) {
        // Use the User $resource to fetch all users
        this.users = User.query();
    }

    // TODO
    delete(user) {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
    }
}

angular.module('mudServerApp.admin')
    .controller('AdminController', AdminController);

