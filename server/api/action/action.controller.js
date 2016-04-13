'use strict'

import _ from 'lodash';
import Action from './action.model';
import Tile from '../status/tile.model';
import User from '../user/user.model'

// TODO remove this hack
const reqUserHack = {
    pos: {q: 0, r: 0},
    email: 'test@test.com'
}

export const findLastMove = (req, res) =>
    Action.findLastMove(reqUserHack)
        .then(respondWithResult(res))
        .catch(handleError(res))

// post saves
export function move(req, res) {
    if (!req.body.to) {
        throw new Error('Set content type | "to" is required')
    }
    req.user = reqUserHack

    return User.findOne({email: req.user.email})
        .then(user => Action.move(req.body, user))
        .then(respondWithResult(res, 201))
        .catch(handleError(res))
}

export function status(req, res) {

    const user = reqUserHack;
    return Tile.find().select({_id: 0, __v: 0}).exec()
        .then(tiles => filterBySight(tiles, user.pos))
        .then(respondWithResult(res))
        .catch(handleError(res))
}

function add1(map, visible, q, r) {
    visible.set(q + "," + r, map.get(q + "," + r));
}

function add7(map, visible, q, r) {
    add1(map, visible, q, r);
    add1(map, visible, q + 1, r);
    add1(map, visible, q, r + 1);
    add1(map, visible, q - 1, r);
    add1(map, visible, q, r - 1);
    add1(map, visible, q + 1, r - 1);
    add1(map, visible, q - 1, r + 1);
}

function filterBySight(tiles, userPos) {
    const map = new Map();

    tiles.forEach(t => map.set((t.q - userPos.q) + "," + (t.r - userPos.r), t))
    const visible = new Map();

    add7(map, visible, 0, 0);



    if (map.get("1,0").canSeeThrough()) add7(map, visible, 1, 0);
    if (map.get("0,1").canSeeThrough()) add7(map, visible, 0, 1);
    if (map.get("-1,0").canSeeThrough()) add7(map, visible, -1, 0);
    if (map.get("0,-1").canSeeThrough()) add7(map, visible, 0, -1);
    if (map.get("1,-1").canSeeThrough()) add7(map, visible, 1, -1);
    if (map.get("-1,1").canSeeThrough()) add7(map, visible, -1, 1);

    return Array.from(visible.values())
}

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200
    return function (entity) {
        if (entity) {
            res.status(statusCode).json(entity)
        }
    }
}

function saveUpdates(updates) {
    return function (entity) {
        var updated = _.merge(entity, updates)
        return updated.save()
    }
}

function handleEntityNotFound(res) {
    return function (entity) {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    return function (err) {
        statusCode = statusCode || err.statusCode || 500
        console.error(err.stack)
        res.status(statusCode).json({code: statusCode, err: err.message})
    }
}

// Gets a single Action from the DB
export function show(req, res) {
    return Action.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Action in the DB
export function create(req, res) {
    return Action.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res))
}

// Updates an existing Action in the DB
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id
    }
    return Action.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res))
}

