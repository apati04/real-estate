const mongoose = require('mongoose');
const { Schema } = mongoose;

const buildingSchema = new Schema({
  address: String,
  longitude: Number,
  latitude: Number,
  rennovated: String,
  owner: String,
  built: String,
  website: String,
  notes: String,
  certifications: String,
  dateAdded: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('buildings', projectSchema);
