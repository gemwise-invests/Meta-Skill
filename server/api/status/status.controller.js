/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/status              ->  index
 * POST    /api/status              ->  create
 * GET     /api/status/:id          ->  show
 * PUT     /api/status/:id          ->  update
 */

'use strict';

import _ from 'lodash';
import Status from './status.model';
import Tile from './tile.model';

// Gets a list of Status
// TODO other characters and other game objects like swords and arrows
export function index(req, res) {
    console.log('user', req.user);

    //y6UnImo9k49kK3eAHifmkoTZA76+DvPDDov98=
    Tile.find().select({_id: 0, __v: 0}).exec()
        .then(tiles => tiles.map(t=>t.toJSON()))
        .then(tiles => tiles.map(t => {
            t.fog = false;
            return t
        })).then(respondWithResult(res))
        .catch(handleError(res));

    //Status.find().exec()
    //    .then(respondWithResult(res))
    //    .catch(handleError(res));
}

// Gets a single Status from the DB
export function show(req, res) {
    return Status.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Status in the DB
export function create(req, res) {
    return Status.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Updates an existing Status in the DB
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Status.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
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
    statusCode = statusCode || 500;
    return function (err) {
        res.status(statusCode).send(err);
    };
}

