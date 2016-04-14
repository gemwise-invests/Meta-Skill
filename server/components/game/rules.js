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
        if ('SWAMP_WATER' === tile.t) {
            return user.gainLevel()
        }
        return tile
    }
}

export default module.exports
