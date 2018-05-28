const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  avatar: String,
  twitterId: String,
  email: { type: String, unique: true, lowercase: true },
  password: String
});

mongoose.model('User', userSchema);
