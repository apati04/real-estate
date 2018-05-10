const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  avatar: String,
  twitterId: String
});

mongoose.model('User', userSchema);
