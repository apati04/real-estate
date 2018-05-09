const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  twitterId: String
});

mongoose.model('User', userSchema);
