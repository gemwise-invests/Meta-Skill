'use strict';

import _ from 'lodash';
import Action from './action.model';

// Gets a list of Actions
export function index(req, res) {
    return Action.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// post saves
export function move(req, res) {
    if (!req.body.to) {
        throw new Error('Set content type | "to" qeruired');
    }
    // TODO remove this hack
    req.user = {
        pos: {"q": 0, "r": 0}
    }

    return Action.move(req.body, req.user)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function (entity) {
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

function saveUpdates(updates) {
    return function (entity) {
        var updated = _.merge(entity, updates);
        return updated.save()
            .then(updated => {
                return updated;
            });
    };
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
        res.status(statusCode).json({code: statusCode, err:err.message})
    };
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
        .catch(handleError(res));
}

// Updates an existing Action in the DB
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Action.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

