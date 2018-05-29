//_user: { type: Schema.Types.ObjectId, ref: 'User' }
const mongoose = require('mongoose');
const Building = require('./Building');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const ModelClass = mongoose.model('project', projectSchema);
module.exports = ModelClass;
