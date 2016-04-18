'use strict';

function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
        id: '@_id'
    }, {
        changePassword: {
            method: 'PUT',
            params: {
                controller: 'password'
            }
        },
        changeAvatar: {
            method: 'POST',
            params: {
                controller: 'avatar'
            }
        },
        get: {
            method: 'GET',
            params: {
                id: 'me'
            }
        }
    });
}

angular.module('mudServerApp.auth').factory('User', UserResource);


