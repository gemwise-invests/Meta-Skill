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

    constructor($scope, $http, socket) {
        this.test = 'Doge was here';
        this.showCursor = true;
        this.$scope = $scope;

        $scope.model = new WesnothTiles.Angular.HexMap();

        this.loadDisk()
    }




    changeHex() {
        this.$scope.model.set({ q: 0, r: 0, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.VILLAGE_HUMAN, fog: false });
    }


    loadDisk() {


        this.loadRing(5, ETerrain.ABYSS);
        this.loadRing(6, ETerrain.ABYSS);
        this.loadRing(7, ETerrain.VOID);

        for (var i = 0; i < 5; i++) {
            this.$scope.model.set({ q: -6, r: i + 1, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });
            this.$scope.model.set({ q: -5, r: i, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });
            this.$scope.model.set({ q: -4, r: i - 1, terrain: ETerrain.SAND_BEACH, overlay: EOverlay.NONE, fog: false });
        }

        this.$scope.model.set({ q: 5, r: -5, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 4, r: -5, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.TRASH, fog: false });
        this.$scope.model.set({ q: 3, r: -5, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.VILLAGE_ORC, fog: false });
        this.$scope.model.set({ q: 2, r: -5, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 4, r: -4, terrain: ETerrain.HILLS_DRY, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 3, r: -4, terrain: ETerrain.SWAMP_MUD, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: -4, terrain: ETerrain.SWAMP_MUD, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 1, r: -4, terrain: ETerrain.SWAMP_MUD, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 1, r: -3, terrain: ETerrain.MOUNTAIN_DRY, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: -3, terrain: ETerrain.SWAMP_MUD, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 0, r: -2, terrain: ETerrain.MOUNTAIN_DRY, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 3, r: -3, terrain: ETerrain.HILLS_DRY, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 6, r: -5, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 6, r: -4, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 6, r: -3, terrain: ETerrain.HILLS_SNOW, overlay: EOverlay.SNOW_FOREST, fog: false });
        this.$scope.model.set({ q: 6, r: -2, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.SNOW_FOREST, fog: false });
        this.$scope.model.set({ q: 6, r: -1, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.SNOW_FOREST, fog: false });

        this.$scope.model.set({ q: 4, r: -1, terrain: ETerrain.MOUNTAIN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 3, r: -1, terrain: ETerrain.MOUNTAIN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 4, r: -2, terrain: ETerrain.MOUNTAIN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 5, r: -2, terrain: ETerrain.MOUNTAIN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: -0, terrain: ETerrain.MOUNTAIN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 3, r: -0, terrain: ETerrain.MOUNTAIN_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 5, r: -3, terrain: ETerrain.HILLS_SNOW, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 4, r: -3, terrain: ETerrain.HILLS_DRY, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 5, r: -4, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 5, r: -1, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.SNOW_FOREST, fog: false });
        this.$scope.model.set({ q: 5, r: 0, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 4, r: 0, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.VILLAGE_HUMAN, fog: false });
        this.$scope.model.set({ q: 4, r: 1, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 3, r: 1, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 3, r: 2, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 2, r: 1, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: 2, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: 3, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 1, r: 2, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 1, r: 3, terrain: ETerrain.FROZEN_ICE, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 0, r: 3, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: 4, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: -3, r: 2, terrain: ETerrain.GRASS_GREEN, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -3, r: 3, terrain: ETerrain.GRASS_GREEN, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -3, r: 1, terrain: ETerrain.GRASS_SEMI_DRY, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -3, r: 0, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.DETRITUS, fog: false });
        this.$scope.model.set({ q: -3, r: -1, terrain: ETerrain.SAND_DESERT, overlay: EOverlay.OASIS, fog: false });
        this.$scope.model.set({ q: -3, r: -2, terrain: ETerrain.HILLS_DESERT, overlay: EOverlay.PALM_DESERT, fog: false });

        this.$scope.model.set({ q: -2, r: 2, terrain: ETerrain.GRASS_GREEN, overlay: EOverlay.WOODS_PINE, fog: false });
        this.$scope.model.set({ q: -2, r: 3, terrain: ETerrain.GRASS_GREEN, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -2, r: 1, terrain: ETerrain.GRASS_SEMI_DRY, overlay: EOverlay.WOODS_PINE, fog: false });
        this.$scope.model.set({ q: -2, r: 0, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.LITER, fog: false });
        this.$scope.model.set({ q: -2, r: -1, terrain: ETerrain.SAND_DESERT, overlay: EOverlay.DESERT_PLANTS, fog: false });
        this.$scope.model.set({ q: -2, r: -2, terrain: ETerrain.SAND_DESERT, overlay: EOverlay.PALM_DESERT, fog: false });
        this.$scope.model.set({ q: -2, r: -3, terrain: ETerrain.HILLS_DESERT, overlay: EOverlay.VILLAGE_DESERT, fog: false });

        this.$scope.model.set({ q: -1, r: -3, terrain: ETerrain.HILLS_DESERT, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -1, r: -2, terrain: ETerrain.MOUNTAIN_DRY, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: -1, r: 3, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -1, r: 1, terrain: ETerrain.GRASS_SEMI_DRY, overlay: EOverlay.WOODS_PINE, fog: false });
        this.$scope.model.set({ q: -1, r: 2, terrain: ETerrain.GRASS_SEMI_DRY, overlay: EOverlay.VILLAGE_ELVEN, fog: false });

        this.$scope.model.set({ q: 0, r: 1, terrain: ETerrain.MOUNTAIN_BASIC, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: 2, terrain: ETerrain.HILLS_REGULAR, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 1, r: 1, terrain: ETerrain.FROZEN_SNOW, overlay: EOverlay.NONE, fog: false });


        this.$scope.model.set({ q: 2, r: -1, terrain: ETerrain.MOUNTAIN_BASIC, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 3, r: -2, terrain: ETerrain.MOUNTAIN_BASIC, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 1, r: 0, terrain: ETerrain.MOUNTAIN_BASIC, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 1, r: -1, terrain: ETerrain.SWAMP_WATER, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: -2, terrain: ETerrain.SWAMP_WATER, overlay: EOverlay.VILLAGE_SWAMP, fog: false });
        this.$scope.model.set({ q: 1, r: -2, terrain: ETerrain.SWAMP_WATER, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: 0, terrain: ETerrain.SWAMP_WATER, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: -1, r: 0, terrain: ETerrain.WATER_COAST_TROPICAL, overlay: EOverlay.VILLAGE_COAST, fog: false });
        this.$scope.model.set({ q: -1, r: -1, terrain: ETerrain.WATER_COAST_TROPICAL, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: -1, terrain: ETerrain.WATER_COAST_TROPICAL, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 0, r: -3, terrain: ETerrain.MOUNTAIN_VOLCANO, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: -4, terrain: ETerrain.SAND_DESERT, overlay: EOverlay.NONE, fog: false });

        for (var i = 0; i < 4; i++) {
            this.$scope.model.set({ q: -2 - i, r: 4 + 1, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });
            this.$scope.model.set({ q: -1 - i, r: 4, terrain: ETerrain.WATER_OCEAN, overlay: EOverlay.NONE, fog: false });
// mapBuilder = mapBuilder.setTile(-2 - i, 4 + 1, ETerrain.WATER_OCEAN)
//   .setTile(-1 - i, 4, ETerrain.WATER_OCEAN);
}

this.$scope.model.set({ q: 20, r: 0, terrain: ETerrain.GRASS_DRY, overlay: EOverlay.NONE, fog: false });

}

loadRing(radius, terrain): void {
    for (var i = 0; i < radius; i++) {
        this.$scope.model.set({ q: 2 + i, r: -radius - 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2 + radius, r: i - radius - 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2 + radius - i, r: i - 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -2 - i, r: radius + 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -2 - radius, r: radius - i + 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -2 + i - radius, r: -i + 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });

        this.$scope.model.set({ q: 1, r: -radius, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: -radius, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -1, r: -radius + 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -2, r: -radius + 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: -1, r: radius, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 0, r: radius, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 1, r: radius - 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
        this.$scope.model.set({ q: 2, r: radius - 1, terrain: terrain, overlay: EOverlay.NONE, fog: false });
    }
}
}

angular.module('mudServerApp.game')
.controller('GameController', GameController);


