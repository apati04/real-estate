const passport = require('passport');
const keys = require('../config/keys');
const User = require('../models/User');
//---passport strategies----
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const TwitterStrategy = require('passport-twitter');
function userToken(user) {
  console.log(user);
  return jwt.encode(
    { sub: user.id, iat: new Date().getTime() },
    keys.secretKey
  );
}
// ----------------Local Strategy------------------------------
const localLogin = new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }

      user.comparePassword(password, (err, match) => {
        if (err) {
          return done(err);
        }
        if (!match) {
          return done(null, false);
        }
        return done(null, user);
      });
    });
  }
);
const jwtOps = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.secretKey
};
const jwtLogin = new JwtStrategy(jwtOps, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// ----------------Local Strategy------------------------------
passport.serializeUser((user, done) => {
  console.log('serial: ', user);

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
        userName: profile.displayName,
        email: profile.emails[0].value
      }).save();
      done(null, user);
    }
  )
);

passport.use(jwtLogin);
passport.use(localLogin);

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
