'use strict'

const canLevelUp = (tile, user) => ({
    0: () => (user.gainLevel()),
    1: () => {
        if ('VILLAGE_DESERT' === tile.o) {
            return user.gainLevel()
        }
    }
}[user.character.level]())

//TODO
const maybeDie = (title, user) => {
    return false
}

const maybeLevelUp = (tile, user) => {
    const levelUp = canLevelUp(tile, user)
    return levelUp ? levelUp : tile
}

export default {
    maybeDie,
    maybeLevelUp
}
