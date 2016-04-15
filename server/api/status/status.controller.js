'use strict'

import Tile from './tile.model'
import {respondWithResult, handleError} from '../lib'

export const myStatus = (req, res) =>
    Tile.findNearbyVisible(req.user)
        .then(tiles => ({
            character: req.user.character,
            tiles: tiles
        }))
        .then(respondWithResult(res))
        .catch(handleError(res))

