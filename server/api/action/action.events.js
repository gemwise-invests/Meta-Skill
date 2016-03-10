/**
 * Action model events
 */

'use strict';

import {EventEmitter} from 'events';
var Action = require('./action.model');
var ActionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ActionEvents.setMaxListeners(0);

// Model events
var events = {
    'save': 'save',
    'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
    var event = events[e];
    Action.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
    return function (doc) {
        ActionEvents.emit(event + ':' + doc._id, doc);
        ActionEvents.emit(event, doc);
    }
}

export default ActionEvents;
