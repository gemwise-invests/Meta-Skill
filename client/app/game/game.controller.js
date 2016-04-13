'use strict';
var ETerrain, EOverlay;

(function (ETerrain) {
    ETerrain[ETerrain["GRASS_GREEN"] = 0] = "GRASS_GREEN";
    ETerrain[ETerrain["GRASS_SEMI_DRY"] = 1] = "GRASS_SEMI_DRY";
    ETerrain[ETerrain["GRASS_DRY"] = 2] = "GRASS_DRY";
    ETerrain[ETerrain["GRASS_LEAF_LITTER"] = 3] = "GRASS_LEAF_LITTER";
    ETerrain[ETerrain["HILLS_REGULAR"] = 4] = "HILLS_REGULAR";
    ETerrain[ETerrain["HILLS_DRY"] = 5] = "HILLS_DRY";
    ETerrain[ETerrain["HILLS_DESERT"] = 6] = "HILLS_DESERT";
    ETerrain[ETerrain["HILLS_SNOW"] = 7] = "HILLS_SNOW";
    ETerrain[ETerrain["MOUNTAIN_BASIC"] = 8] = "MOUNTAIN_BASIC";
    ETerrain[ETerrain["MOUNTAIN_DRY"] = 9] = "MOUNTAIN_DRY";
    ETerrain[ETerrain["MOUNTAIN_SNOW"] = 10] = "MOUNTAIN_SNOW";
    ETerrain[ETerrain["MOUNTAIN_VOLCANO"] = 11] = "MOUNTAIN_VOLCANO";
    ETerrain[ETerrain["FROZEN_SNOW"] = 12] = "FROZEN_SNOW";
    ETerrain[ETerrain["FROZEN_ICE"] = 13] = "FROZEN_ICE";
    ETerrain[ETerrain["SAND_BEACH"] = 14] = "SAND_BEACH";
    ETerrain[ETerrain["SAND_DESERT"] = 15] = "SAND_DESERT";
    ETerrain[ETerrain["SWAMP_MUD"] = 16] = "SWAMP_MUD";
    ETerrain[ETerrain["SWAMP_WATER"] = 17] = "SWAMP_WATER";
    ETerrain[ETerrain["WATER_OCEAN"] = 18] = "WATER_OCEAN";
    ETerrain[ETerrain["WATER_COAST_TROPICAL"] = 19] = "WATER_COAST_TROPICAL";
    ETerrain[ETerrain["ABYSS"] = 20] = "ABYSS";
    ETerrain[ETerrain["VOID"] = 21] = "VOID"; // Xv 21
})(ETerrain || (ETerrain = {}));


(function (EOverlay) {
    EOverlay[EOverlay["WOODS_PINE"] = 22] = "WOODS_PINE";
    EOverlay[EOverlay["SNOW_FOREST"] = 23] = "SNOW_FOREST";
    EOverlay[EOverlay["JUNGLE"] = 24] = "JUNGLE";
    EOverlay[EOverlay["PALM_DESERT"] = 25] = "PALM_DESERT";
    EOverlay[EOverlay["RAINFOREST"] = 26] = "RAINFOREST";
    EOverlay[EOverlay["SAVANNA"] = 27] = "SAVANNA";
    EOverlay[EOverlay["DECIDUOUS_SUMMER"] = 28] = "DECIDUOUS_SUMMER";
    EOverlay[EOverlay["DECIDUOUS_FALL"] = 29] = "DECIDUOUS_FALL";
    EOverlay[EOverlay["DECIDUOUS_WINTER"] = 30] = "DECIDUOUS_WINTER";
    EOverlay[EOverlay["DECIDUOUS_WINTER_SNOW"] = 31] = "DECIDUOUS_WINTER_SNOW";
    EOverlay[EOverlay["MIXED_SUMMER"] = 32] = "MIXED_SUMMER";
    EOverlay[EOverlay["MIXED_FALL"] = 33] = "MIXED_FALL";
    EOverlay[EOverlay["MIXED_WINTER"] = 34] = "MIXED_WINTER";
    EOverlay[EOverlay["MIXED_WINTER_SNOW"] = 35] = "MIXED_WINTER_SNOW";
    EOverlay[EOverlay["MUSHROOMS"] = 36] = "MUSHROOMS";
    EOverlay[EOverlay["FARM_VEGS"] = 37] = "FARM_VEGS";
    EOverlay[EOverlay["FLOWERS_MIXED"] = 38] = "FLOWERS_MIXED";
    EOverlay[EOverlay["RUBBLE"] = 39] = "RUBBLE";
    EOverlay[EOverlay["STONES_SMALL"] = 40] = "STONES_SMALL";
    EOverlay[EOverlay["OASIS"] = 41] = "OASIS";
    EOverlay[EOverlay["DETRITUS"] = 42] = "DETRITUS";
    EOverlay[EOverlay["LITER"] = 43] = "LITER";
    EOverlay[EOverlay["TRASH"] = 44] = "TRASH";
    EOverlay[EOverlay["VILLAGE_HUMAN"] = 45] = "VILLAGE_HUMAN";
    EOverlay[EOverlay["VILLAGE_HUMAN_RUIN"] = 46] = "VILLAGE_HUMAN_RUIN";
    EOverlay[EOverlay["VILLAGE_HUMAN_CITY"] = 47] = "VILLAGE_HUMAN_CITY";
    EOverlay[EOverlay["VILLAGE_HUMAN_CITY_RUIN"] = 48] = "VILLAGE_HUMAN_CITY_RUIN";
    EOverlay[EOverlay["VILLAGE_TROPICAL"] = 49] = "VILLAGE_TROPICAL";
    EOverlay[EOverlay["VILLAGE_HUT"] = 50] = "VILLAGE_HUT";
    EOverlay[EOverlay["VILLAGE_LOG_CABIN"] = 51] = "VILLAGE_LOG_CABIN";
    EOverlay[EOverlay["VILLAGE_CAMP"] = 52] = "VILLAGE_CAMP";
    EOverlay[EOverlay["VILLAGE_IGLOO"] = 53] = "VILLAGE_IGLOO";
    EOverlay[EOverlay["VILLAGE_ORC"] = 54] = "VILLAGE_ORC";
    EOverlay[EOverlay["VILLAGE_ELVEN"] = 55] = "VILLAGE_ELVEN";
    EOverlay[EOverlay["VILLAGE_DESERT"] = 56] = "VILLAGE_DESERT";
    EOverlay[EOverlay["VILLAGE_DESERT_CAMP"] = 57] = "VILLAGE_DESERT_CAMP";
    EOverlay[EOverlay["VILLAGE_DWARVEN"] = 58] = "VILLAGE_DWARVEN";
    EOverlay[EOverlay["VILLAGE_SWAMP"] = 59] = "VILLAGE_SWAMP";
    EOverlay[EOverlay["VILLAGE_COAST"] = 60] = "VILLAGE_COAST";
    EOverlay[EOverlay["DESERT_PLANTS"] = 61] = "DESERT_PLANTS";
    EOverlay[EOverlay["NONE"] = 62] = "NONE";
})(EOverlay || (EOverlay = {}));




class GameController {

    constructor($scope, $http, socket, $element) {
        this.$scope = $scope;
        this.$http = $http;
        $scope.model = new WesnothTiles.Angular.HexMap();
        this.actions = [];
        this.socket = socket;

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('action');
        });

        this.onHexClicked = (h) => {
            console.log("Clicked hex", h);
        }

        const wesnothTiles = $element.find('wesnoth-tiles');

        this.getStatus();

        this.loadImage("assets/images/hero.png").then(img => {
            this.onPostDraw = (ctx) => {
                ctx.drawImage(img, wesnothTiles[0].clientWidth / 2 - 25, wesnothTiles[0].clientHeight / 2 - 32);
            }
        })

    }

    $onInit() {
        this.$http.get('/api/actions').then(response => {
            this.actions = response.data;
            this.socket.syncUpdates('action', this.actions);
        });
    }


    loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              resolve(img);
            }
            img.onerror = () => {
              reject();
            };
        });
    }

    getStatus() {
        return this.$http.get('/api/actions/status').then(response => {
            response.data.forEach(h => {
                this.$scope.model.set({ q: h.q, r: h.r, terrain: ETerrain[h.t], overlay: EOverlay[h.o], fog: false });
            })
        });
    }
}

angular.module('mudServerApp.game')
.controller('GameController', GameController);


