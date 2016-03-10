'use strict';

//TODO remove
import mongoose from 'mongoose';

var StatusSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Status', StatusSchema);
