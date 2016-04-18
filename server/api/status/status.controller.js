'use strict'

import Tile from './tile.model'
import User from '../user/user.model'
import {respondWithResult, handleError} from '../lib'
import {Promise} from 'bluebird'

export const myStatus = (req, res) =>
    Promise.all([
            Tile.findNearbyVisible(req.user),
            User.findNearbyCharacters(req.user)
        ])
        .spread((tiles, characters) => ({
            character: req.user.character,
            tiles: tiles,
            characters
        }))
        .then(respondWithResult(res))
        .catch(handleError(res))

