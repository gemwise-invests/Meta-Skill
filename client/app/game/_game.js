'use strict';

angular.module('mudServerApp.game', [
        'mudServerApp.auth',
        'ui.router',
        'WesnothTiles'
    ])
    .constant("WesnothTilesConfig", {
        path: "bower_components/wesnoth-tiles/tiles/"
    })
