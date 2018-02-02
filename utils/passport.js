const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
// sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id , done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
})

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, async (accesstoken, refreshToken, profile, done) => {
  const currentUser = await User.findOne({googleId: profile.id});
  if (currentUser) {
    return done(null, currentUser);
  }
  const user = await new User({
    googleId: profile.id,
    userName: profile.displayName
  }).save();
  done(null, user);
}));

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, {message: 'Incorrect password'});
//       }
//     })
//   }
// ));
