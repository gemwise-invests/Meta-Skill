'use strict';

import mongoose from 'mongoose';
import Tile from '../status/tile.model';

//TODO MoveSchema separetly
let ActionSchema = new mongoose.Schema({
    // TODO
    user: String,
    //ex: move
    type: {
        type: String,
        enum: ['move'],
        required: true
    },
    from: mongoose.Schema.Types.Object,
    to: mongoose.Schema.Types.Object
}, {timestamps: true});

ActionSchema
    .path('to')
    .validate(function (value, respond) {
        Tile.findOne({q: value.q, r: value.r}).exec()
            .then(tile => tile.canMoveInto())
            .then(isValid => {
                return respond(isValid);
            })
            .catch(function (err) {
                throw err;
            });
    }, 'This move is illegal.');

export default mongoose.model('Action', ActionSchema);
