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
userSchema.pre('save', next => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.comarePassword = function(currentPassword, cb) {
  bcrypt.compare(currentPassword, this.password, (err, match) => {
    if (err) {
      return cb(err);
    }
    cb(null, found);
  });
};
const ModelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;
