module.exports = function gameRules() {
    'use strict';

    return {
        isAllowed,
        isFinished
    }

    function isAllowed(from, to) {
        return true;
    }

    function isFinished(tile) {
        if ('SWAMP_WATER' === tile.t) {
            return {message: 'Much awesome! You won!', statusCode: 417}
        }
        return tile
    }
}

export default module.exports
