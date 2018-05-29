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
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.comparePassword = function(currentPassword, cb) {
  bcrypt.compare(currentPassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
const ModelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;
