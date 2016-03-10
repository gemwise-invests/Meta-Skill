'use strict';

import mongoose from 'mongoose';

var ActionSchema = new mongoose.Schema({
    // TODO
    user: String,
    //ex: move
    type: {
        type: String,
        enum: [],
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Action', ActionSchema);
