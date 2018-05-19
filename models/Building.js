const mongoose = require('mongoose');
const { Schema } = mongoose;

const buildingSchema = new Schema({
  zpid: String,
  image: Object,
  userImage: Object,
  type: String,
  fullAddress: String,
  address: Object,
  location: Object,
  yearBuilt: String,
  rooms: Object,
  lotSize: Object,
  finishedSize: Object,
  links: Object,
  financials: Object,
  zestimate: Object,
  localRealEstate: Object,
  dateAdded: Date,
  _project: { type: Schema.Types.ObjectId, ref: 'Project' },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Building', buildingSchema);

/**
 *   
 * 
 * address: { any: Object },
  links: { any: Object },
  useCode: String,
  taxAssessmentYear: String,
  financial: { any: Object },
  details: { any: Object },
  imageUrl: String,
  rennovated: String,
  owner: String,
  yearBuilt: String,
  zestimate: { any: Object },
  website: String,
  color: String,
  placemark: String,
  notes: String,
  certifications: String,
  prevOwner: String,
 */

// _user: ObjectId("5af9338168ed761c463ab01f")
// _project: ObjectId("5aff39972ac57e0b2537fda6")
