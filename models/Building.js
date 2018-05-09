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
  color: String,
  placemark: String,
  notes: String,
  certifications: String,
  prevOwner: String,
  dateAdded: Date,
  _projectId: { type: Schema.Types.ObjectId, ref: 'Project' }
});

mongoose.model('Building', buildingSchema);
