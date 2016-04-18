/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Tile from '../api/status/tile.model'
import User from '../api/user/user.model'

Tile.find({}).remove()
    .then(() => {
        Tile.create(
            {"q": -10, "r": 1, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 2, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 3, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 4, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 5, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 6, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 7, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -10, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 0, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 1, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 2, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 3, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 4, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 5, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 6, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 7, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -9, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -8, "r": -1, "t": "VOID", "o": "NONE"},
            {"q": -8, "r": 0, "t": "VOID", "o": "NONE"},
            {"q": -8, "r": 1, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 2, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 3, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 4, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 5, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -8, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -8, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -7, "r": -2, "t": "VOID", "o": "NONE"},
            {"q": -7, "r": -1, "t": "VOID", "o": "NONE"},
            {"q": -7, "r": 0, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 1, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 2, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 3, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 4, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 5, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -7, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -7, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -6, "r": -3, "t": "VOID", "o": "NONE"},
            {"q": -6, "r": -2, "t": "VOID", "o": "NONE"},
            {"q": -6, "r": -1, "t": "ABYSS", "o": "NONE"},
            {"q": -6, "r": 0, "t": "ABYSS", "o": "NONE"},
            {"q": -6, "r": 1, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -6, "r": 2, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -6, "r": 3, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -6, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -6, "r": 5, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -6, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -6, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -6, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -6, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -5, "r": -4, "t": "VOID", "o": "NONE"},
            {"q": -5, "r": -3, "t": "VOID", "o": "NONE"},
            {"q": -5, "r": -2, "t": "ABYSS", "o": "NONE"},
            {"q": -5, "r": -1, "t": "ABYSS", "o": "NONE"},
            {"q": -5, "r": 0, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -5, "r": 1, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -5, "r": 2, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -5, "r": 3, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -5, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -5, "r": 5, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -5, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -5, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -5, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -5, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -4, "r": -5, "t": "VOID", "o": "NONE"},
            {"q": -4, "r": -4, "t": "VOID", "o": "NONE"},
            {"q": -4, "r": -3, "t": "ABYSS", "o": "NONE"},
            {"q": -4, "r": -2, "t": "ABYSS", "o": "NONE"},
            {"q": -4, "r": -1, "t": "SAND_BEACH", "o": "NONE"},
            {"q": -4, "r": 0, "t": "SAND_BEACH", "o": "NONE"},
            {"q": -4, "r": 1, "t": "SAND_BEACH", "o": "NONE"},
            {"q": -4, "r": 2, "t": "SAND_BEACH", "o": "NONE"},
            {"q": -4, "r": 3, "t": "SAND_BEACH", "o": "NONE"},
            {"q": -4, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -4, "r": 5, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -4, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -4, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -4, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -4, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -3, "r": -6, "t": "VOID", "o": "NONE"},
            {"q": -3, "r": -5, "t": "VOID", "o": "NONE"},
            {"q": -3, "r": -4, "t": "ABYSS", "o": "NONE"},
            {"q": -3, "r": -3, "t": "ABYSS", "o": "NONE"},
            {"q": -3, "r": -2, "t": "HILLS_DESERT", "o": "PALM_DESERT"},
            {"q": -3, "r": -1, "t": "SAND_DESERT", "o": "OASIS"},
            {"q": -3, "r": 0, "t": "GRASS_DRY", "o": "DETRITUS"},
            {"q": -3, "r": 1, "t": "GRASS_SEMI_DRY", "o": "NONE"},
            {"q": -3, "r": 2, "t": "GRASS_GREEN", "o": "NONE"},
            {"q": -3, "r": 3, "t": "GRASS_GREEN", "o": "NONE"},
            {"q": -3, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -3, "r": 5, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -3, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -3, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -3, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -3, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -2, "r": -7, "t": "VOID", "o": "NONE"},
            {"q": -2, "r": -6, "t": "VOID", "o": "NONE"},
            {"q": -2, "r": -5, "t": "ABYSS", "o": "NONE"},
            {"q": -2, "r": -4, "t": "ABYSS", "o": "NONE"},
            {"q": -2, "r": -3, "t": "HILLS_DESERT", "o": "VILLAGE_DESERT"},
            {"q": -2, "r": -2, "t": "SAND_DESERT", "o": "PALM_DESERT"},
            {"q": -2, "r": -1, "t": "SAND_DESERT", "o": "DESERT_PLANTS"},
            {"q": -2, "r": 0, "t": "GRASS_DRY", "o": "LITER"},
            {"q": -2, "r": 1, "t": "GRASS_SEMI_DRY", "o": "WOODS_PINE"},
            {"q": -2, "r": 2, "t": "GRASS_GREEN", "o": "WOODS_PINE"},
            {"q": -2, "r": 3, "t": "GRASS_GREEN", "o": "NONE"},
            {"q": -2, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -2, "r": 5, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -2, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -2, "r": 7, "t": "ABYSS", "o": "NONE"},
            {"q": -2, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": -2, "r": 9, "t": "VOID", "o": "NONE"},
            {"q": -1, "r": -7, "t": "VOID", "o": "NONE"},
            {"q": -1, "r": -6, "t": "VOID", "o": "NONE"},
            {"q": -1, "r": -5, "t": "ABYSS", "o": "NONE"},
            {"q": -1, "r": -4, "t": "ABYSS", "o": "NONE"},
            {"q": -1, "r": -3, "t": "HILLS_DESERT", "o": "NONE"},
            {"q": -1, "r": -2, "t": "MOUNTAIN_DRY", "o": "NONE"},
            {"q": -1, "r": -1, "t": "WATER_COAST_TROPICAL", "o": "NONE"},
            {"q": -1, "r": 0, "t": "WATER_COAST_TROPICAL", "o": "VILLAGE_COAST"},
            {"q": -1, "r": 1, "t": "GRASS_SEMI_DRY", "o": "WOODS_PINE"},
            {"q": -1, "r": 2, "t": "GRASS_SEMI_DRY", "o": "VILLAGE_ELVEN"},
            {"q": -1, "r": 3, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -1, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": -1, "r": 5, "t": "ABYSS", "o": "NONE"},
            {"q": -1, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": -1, "r": 7, "t": "VOID", "o": "NONE"},
            {"q": -1, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": 0, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 0, "r": -7, "t": "VOID", "o": "NONE"},
            {"q": 0, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 0, "r": -5, "t": "ABYSS", "o": "NONE"},
            {"q": 0, "r": -4, "t": "SAND_DESERT", "o": "NONE"},
            {"q": 0, "r": -3, "t": "MOUNTAIN_VOLCANO", "o": "NONE"},
            {"q": 0, "r": -2, "t": "MOUNTAIN_DRY", "o": "NONE"},
            {"q": 0, "r": -1, "t": "WATER_COAST_TROPICAL", "o": "NONE"},
            {"q": 0, "r": 0, "t": "SWAMP_WATER", "o": "NONE"},
            {"q": 0, "r": 1, "t": "MOUNTAIN_BASIC", "o": "NONE"},
            {"q": 0, "r": 2, "t": "HILLS_REGULAR", "o": "NONE"},
            {"q": 0, "r": 3, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": 0, "r": 4, "t": "WATER_OCEAN", "o": "NONE"},
            {"q": 0, "r": 5, "t": "ABYSS", "o": "NONE"},
            {"q": 0, "r": 6, "t": "ABYSS", "o": "NONE"},
            {"q": 0, "r": 7, "t": "VOID", "o": "NONE"},
            {"q": 0, "r": 8, "t": "VOID", "o": "NONE"},
            {"q": 1, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 1, "r": -7, "t": "VOID", "o": "NONE"},
            {"q": 1, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 1, "r": -5, "t": "ABYSS", "o": "NONE"},
            {"q": 1, "r": -4, "t": "SWAMP_MUD", "o": "NONE"},
            {"q": 1, "r": -3, "t": "MOUNTAIN_DRY", "o": "NONE"},
            {"q": 1, "r": -2, "t": "SWAMP_WATER", "o": "NONE"},
            {"q": 1, "r": -1, "t": "SWAMP_WATER", "o": "NONE"},
            {"q": 1, "r": 0, "t": "MOUNTAIN_BASIC", "o": "NONE"},
            {"q": 1, "r": 1, "t": "FROZEN_SNOW", "o": "NONE"},
            {"q": 1, "r": 2, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 1, "r": 3, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 1, "r": 4, "t": "ABYSS", "o": "NONE"},
            {"q": 1, "r": 5, "t": "ABYSS", "o": "NONE"},
            {"q": 1, "r": 6, "t": "VOID", "o": "NONE"},
            {"q": 1, "r": 7, "t": "VOID", "o": "NONE"},
            {"q": 2, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 2, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 2, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 2, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 2, "r": -5, "t": "GRASS_DRY", "o": "NONE"},
            {"q": 2, "r": -4, "t": "SWAMP_MUD", "o": "NONE"},
            {"q": 2, "r": -3, "t": "SWAMP_MUD", "o": "NONE"},
            {"q": 2, "r": -2, "t": "SWAMP_WATER", "o": "VILLAGE_SWAMP"},
            {"q": 2, "r": -1, "t": "MOUNTAIN_BASIC", "o": "NONE"},
            {"q": 2, "r": 0, "t": "MOUNTAIN_SNOW", "o": "NONE"},
            {"q": 2, "r": 1, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 2, "r": 2, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 2, "r": 3, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 2, "r": 4, "t": "ABYSS", "o": "NONE"},
            {"q": 2, "r": 5, "t": "ABYSS", "o": "NONE"},
            {"q": 2, "r": 6, "t": "VOID", "o": "NONE"},
            {"q": 2, "r": 7, "t": "VOID", "o": "NONE"},
            {"q": 3, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 3, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 3, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 3, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 3, "r": -5, "t": "GRASS_DRY", "o": "VILLAGE_ORC"},
            {"q": 3, "r": -4, "t": "SWAMP_MUD", "o": "NONE"},
            {"q": 3, "r": -3, "t": "HILLS_DRY", "o": "NONE"},
            {"q": 3, "r": -2, "t": "MOUNTAIN_BASIC", "o": "NONE"},
            {"q": 3, "r": -1, "t": "MOUNTAIN_SNOW", "o": "NONE"},
            {"q": 3, "r": 0, "t": "MOUNTAIN_SNOW", "o": "NONE"},
            {"q": 3, "r": 1, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 3, "r": 2, "t": "FROZEN_ICE", "o": "NONE"},
            {"q": 3, "r": 3, "t": "ABYSS", "o": "NONE"},
            {"q": 3, "r": 4, "t": "ABYSS", "o": "NONE"},
            {"q": 3, "r": 5, "t": "VOID", "o": "NONE"},
            {"q": 3, "r": 6, "t": "VOID", "o": "NONE"},
            {"q": 4, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 4, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 4, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 4, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 4, "r": -5, "t": "GRASS_DRY", "o": "TRASH"},
            {"q": 4, "r": -4, "t": "HILLS_DRY", "o": "NONE"},
            {"q": 4, "r": -3, "t": "HILLS_DRY", "o": "NONE"},
            {"q": 4, "r": -2, "t": "MOUNTAIN_SNOW", "o": "NONE"},
            {"q": 4, "r": -1, "t": "MOUNTAIN_SNOW", "o": "NONE"},
            {"q": 4, "r": 0, "t": "FROZEN_SNOW", "o": "VILLAGE_HUMAN"},
            {"q": 4, "r": 1, "t": "FROZEN_SNOW", "o": "NONE"},
            {"q": 4, "r": 2, "t": "ABYSS", "o": "NONE"},
            {"q": 4, "r": 3, "t": "ABYSS", "o": "NONE"},
            {"q": 4, "r": 4, "t": "VOID", "o": "NONE"},
            {"q": 4, "r": 5, "t": "VOID", "o": "NONE"},
            {"q": 5, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 5, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 5, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 5, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 5, "r": -5, "t": "GRASS_DRY", "o": "NONE"},
            {"q": 5, "r": -4, "t": "GRASS_DRY", "o": "NONE"},
            {"q": 5, "r": -3, "t": "HILLS_SNOW", "o": "NONE"},
            {"q": 5, "r": -2, "t": "MOUNTAIN_SNOW", "o": "NONE"},
            {"q": 5, "r": -1, "t": "FROZEN_SNOW", "o": "SNOW_FOREST"},
            {"q": 5, "r": 0, "t": "FROZEN_SNOW", "o": "NONE"},
            {"q": 5, "r": 1, "t": "ABYSS", "o": "NONE"},
            {"q": 5, "r": 2, "t": "ABYSS", "o": "NONE"},
            {"q": 5, "r": 3, "t": "VOID", "o": "NONE"},
            {"q": 5, "r": 4, "t": "VOID", "o": "NONE"},
            {"q": 6, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 6, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 6, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 6, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 6, "r": -5, "t": "GRASS_DRY", "o": "NONE"},
            {"q": 6, "r": -4, "t": "FROZEN_SNOW", "o": "NONE"},
            {"q": 6, "r": -3, "t": "HILLS_SNOW", "o": "SNOW_FOREST"},
            {"q": 6, "r": -2, "t": "FROZEN_SNOW", "o": "SNOW_FOREST"},
            {"q": 6, "r": -1, "t": "FROZEN_SNOW", "o": "SNOW_FOREST"},
            {"q": 6, "r": 0, "t": "ABYSS", "o": "NONE"},
            {"q": 6, "r": 1, "t": "ABYSS", "o": "NONE"},
            {"q": 6, "r": 2, "t": "VOID", "o": "NONE"},
            {"q": 6, "r": 3, "t": "VOID", "o": "NONE"},
            {"q": 7, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 7, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 7, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": -5, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": -4, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": -3, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": -2, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": -1, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": 0, "t": "ABYSS", "o": "NONE"},
            {"q": 7, "r": 1, "t": "VOID", "o": "NONE"},
            {"q": 7, "r": 2, "t": "VOID", "o": "NONE"},
            {"q": 8, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 8, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 8, "r": -7, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": -6, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": -5, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": -4, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": -3, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": -2, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": -1, "t": "ABYSS", "o": "NONE"},
            {"q": 8, "r": 0, "t": "VOID", "o": "NONE"},
            {"q": 8, "r": 1, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -7, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -6, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -5, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -4, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -3, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -2, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": -1, "t": "VOID", "o": "NONE"},
            {"q": 9, "r": 0, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -9, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -8, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -7, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -6, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -5, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -4, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -3, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -2, "t": "VOID", "o": "NONE"},
            {"q": 10, "r": -1, "t": "VOID", "o": "NONE"},
            {"q": 19, "r": 0, "t": "VOID", "o": "NONE"},
            {"q": 19, "r": 1, "t": "VOID", "o": "NONE"},
            {"q": 20, "r": -1, "t": "VOID", "o": "NONE"},
            {"q": 20, "r": 0, "t": "GRASS_DRY", "o": "NONE"},
            {"q": 20, "r": 1, "t": "VOID", "o": "NONE"},
            {"q": 21, "r": -1, "t": "VOID", "o": "NONE"},
            {"q": 21, "r": 0, "t": "VOID", "o": "NONE"})
            .then(() => {
                console.log('finished populating tiles');
            })
    })

User.find({}).remove()
    .then(() => {
        User.create({
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@admin.com',
                password: 'admin'
            },
            {
                provider: 'local',
                name: 'Doge User',
                email: 'doge@doge.com',
                password: 'doge',
                character: {
                    name: 'Doge',
                    level: 0,
                    pos: {
                        q: 0,
                        r: 0
                    },
                    items: [{
                        name: 'holocracy'
                    }, {
                        name: 'Clean code'
                    }, {
                        name: 'Much Agile Scrum'
                    }],
                    stats: {
                        str: 10,
                        mov: 10,
                        agl: 10,
                        maxHp: 10,
                        hp: 10
                    }
                }
            },
            {
                provider: 'local',
                name: 'Test User',
                email: 'test@test.com',
                password: 'test',
                character: {
                    name: 'Magento',
                    level: 0,
                    pos: {
                        q: 0,
                        r: 0
                    },
                    items: [{
                        name: 'Hammer'
                    }],
                    stats: {
                        str: 10,
                        mov: 10,
                        agl: 10,
                        maxHp: 10,
                        hp: 10
                    }
                }
            })
            .then(() => {
                console.log('finished populating users')
            })
    })

