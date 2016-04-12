'use strict';

import mongoose from 'mongoose'
import Tile from '../status/tile.model'

//TODO MoveSchema separetly
let ActionSchema = new mongoose.Schema({
    // TODO to actual user model
    user: mongoose.Schema.Types.Object,
    //ex: move
    type: {
        type: String,
        enum: ['move'],
        required: true
    },
    from: mongoose.Schema.Types.Object,
    to: mongoose.Schema.Types.Object
}, {timestamps: true})

ActionSchema
    .path('to')
    .validate((value, respond) => {
        Tile.findOne({q: value.q, r: value.r}).exec()
            .then(tile => tile.canMoveInto())
            .then(respond)
            .catch((err) => {
                throw err
            })
    }, 'This move is illegal.')

const toCoords = (direction) => ({
    n: {q: 0, r: -1},
    ne: {q: +1, r: -1},
    se: {q: +1, r: -1},
    s: {q: 0, r: +1},
    sw: {q: -1, r: +1},
    nw: {q: -1, r: 0}
}[direction])

ActionSchema.statics.move = function move(direction, player, respond) {
    console.warn('moving', direction, player);
    let dPosition = toCoords(direction.to)
    let newPos = {q: player.pos.q + dPosition.q, r: player.pos.r + dPosition.r}

    return Tile.findOne({q: newPos.q, r: newPos.r}).exec()
        .then(tile => tile.canMoveInto())
        .then(data => {
            console.log('can move into?', data)
            return data
        })
        .then(respond)
        .catch((err) => {
            throw err
        })
    //return this.where('name', new RegExp(name, 'i')).exec(cb)
};

export default mongoose.model('Action', ActionSchema)
