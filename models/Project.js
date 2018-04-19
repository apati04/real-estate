//_user: { type: Schema.Types.ObjectId, ref: 'User' }
const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: String,
  dateAdded: Date,
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('projects', projectSchema);
