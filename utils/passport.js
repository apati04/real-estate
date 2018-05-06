const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
// sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accesstoken, refreshToken, profile, done) => {
      const currentUser = await User.findOne({ googleId: profile.id });
      if (currentUser) {
        return done(null, currentUser);
      }
      const user = await new User({
        googleId: profile.id,
        userName: profile.displayName
      }).save();
      done(null, user);
    }
  )
);

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: keys.twitterClientID,
//       consumerSecret: keys.twitterClientSecret,
//       callbackURL: '/auth/twitter/callback',
//       proxy: true
//     },
//     async (token, tokenSecret, profile, done) => {
//       const currentUser = await User.findOne({ twitterId: profile.id });
//       if (currentUser) {
//         return done(null, currentUser);
//       }
//       const twitterUser = await new User({
//         twitterId: profile.id,
//         userName: profile.displayName
//       }).save();
//       done(null, twitterUser);
//     }
//   )
// );
