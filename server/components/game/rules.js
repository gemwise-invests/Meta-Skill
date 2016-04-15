module.exports = function gameRules() {
    'use strict';

    return {
        isAllowed,
        isFinished
    }

    // TODO remove
    function isAllowed(from, to) {
        return true;
    }

    function isFinished(tile, user) {
        if ('VILLAGE_DESERT' === tile.o) {
            return user.gainLevel()
        }
        return tile
    }
}

export default module.exports
