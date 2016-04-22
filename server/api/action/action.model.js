'use strict'

import mongoose from 'mongoose'
import {Tile, TileError} from '../status/tile.model'
import gameRules from '../../components/game/rules'
import User from '../user/user.model'
import _ from 'lodash'

//TODO MoveSchema separetly
let ActionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['move', 'attack', 'pickup'],
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
            .then(respond), 'This move is illegal.')

ActionSchema.statics.newAttack = (user, userTo) =>
    (new Action({
        user,
        userTo,
        type: 'attack',
        from: user.character.pos,
        to: userTo.character.pos
    })).save()

const toCoords = (direction) => ({
    n: {q: 0, r: -1},
    ne: {q: +1, r: -1},
    se: {q: +1, r: 0},
    s: {q: 0, r: +1},
    sw: {q: -1, r: +1},
    nw: {q: -1, r: 0}
}[direction])

function requireDirection(direction, user) {
    const dPosition = toCoords(direction.to)

    if (!dPosition) {
        return Promise.reject(new TileError('Invalid coordinates'))
    }
    return {dPosition, user}
}

ActionSchema.statics.move = _.flow(requireDirection, function move({dPosition, user}) {
    const playerPos = user.character.pos
    const newPos = {q: playerPos.q + dPosition.q, r: playerPos.r + dPosition.r}

    return Tile.findOne(newPos)
        .select({_id: 0, __v: 0})
        .exec()
        .then(tile => tile.canMoveInto())
        .tap(title => new Action({
                type: 'move',
                from: playerPos,
                to: {q: title.q, r: title.r},
                user
            }).save()
        )
        .tap(() => {
            user.move(newPos)
        })
        .then(title => gameRules().isFinished(title, user))
})

ActionSchema.statics.attackTo = _.flow(requireDirection, function attackTo({dPosition, user}) {
    const playerPos = user.character.pos
    const newPos = {q: playerPos.q + dPosition.q, r: playerPos.r + dPosition.r}

    //TODO weapon stats 2*
    //TODO randomnes
    //TODO safe
    return User.findSafe({
            $and: [
                {'character.pos.q': newPos.q},
                {'character.pos.r': newPos.r}
            ]
        })
        .then(dbUsers => {
            return dbUsers.map(u => {
                // TODO flatten or new character collection
                if (u.character.stats.agl <= user.character.stats.str) {
                    u.character.stats.hp -= user.character.stats.str
                }
                // hit back
                if (user.character.stats.agl <= u.character.stats.str) {
                    user.character.stats.hp -= u.character.stats.str
                }
                return u
            })
        })
        .then(dbUsers =>
            Promise.all(dbUsers.map(u => u.save()))
        )
        .then(attackedUsers => {
            if (_.isEmpty(attackedUsers)) {
                return []
            }
            console.log('attacked users', attackedUsers.map(u => u.character))
            console.log('by', user.character)
            return Promise.all(
                //TODO maybe save users here
                attackedUsers.map(u => Action.newAttack(user, u))
            ).then(attacks => attacks.map(a => a.toJSON()))
        })
})


//TODO finish
ActionSchema.statics.findLastMove = (user) =>
    User.findOne({email: user.email}).exec()
        .then(dbUser => Action.find({user: dbUser})
            .select({_id: 0, __v: 0, user: 0})
            .exec()
        )

var Action = mongoose.model('Action', ActionSchema)

export default Action
