'use strict';

import mongoose from 'mongoose'
import {Tile, TileError} from '../status/tile.model'
import gameRules from '../../components/game/rules';

//TODO MoveSchema separetly
let ActionSchema = new mongoose.Schema({
    // TODO to actual user model
    user: mongoose.Schema.Types.Object,
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
    .validate((value, respond) =>
        Tile.findOne({q: value.q, r: value.r}).exec()
            .then(tile => tile.canMoveInto())
            .then(respond)
        , 'This move is illegal.'
    )

const toCoords = (direction) => ({
    n: {q: 0, r: -1},
    ne: {q: +1, r: -1},
    se: {q: +1, r: 0},
    s: {q: 0, r: +1},
    sw: {q: -1, r: +1},
    nw: {q: -1, r: 0}
}[direction])

ActionSchema.statics.move = function move(direction, player) {
    let dPosition = toCoords(direction.to)

    if (!dPosition) {
        return Promise.reject(new TileError('Invalid coordinates'))
    }
    let newPos = {q: player.pos.q + dPosition.q, r: player.pos.r + dPosition.r}

    return Tile.findOne(newPos)
        .select({_id: 0, __v: 0})
        .exec()
        .then(tile => tile.canMoveInto())
        .tap(title => {
            return (new Action({
                type: 'move',
                from: player.pos,
                to: {q: title.q, r: title.r},
                user: player.email
            })).save()
        })
        .then(gameRules().isFinished)
}

let Action = mongoose.model('Action', ActionSchema)

export default Action
