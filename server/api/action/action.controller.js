'use strict'

import _ from 'lodash'
import Action from './action.model'
import {respondWithResult, handleError} from '../lib'

export const findLastMove = (req, res) =>
    Action.findLastMove(req.user)
        .then(respondWithResult(res))
        .catch(handleError(res))

function requireProp(req, res) {
    if (!req.body.to) {
        throw new Error('Set content type | "to" is required')
    }
    return arguments
}

const moveUser = (req, res) =>
    Action.move(req.body, req.user)
        .then(respondWithResult(res, 201))
        .catch(handleError(res))

// post user moves
export const move = _.flow(requireProp, _.spread(moveUser))

