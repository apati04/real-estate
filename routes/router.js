const passportConfig = require('../utils/passport');
const passport = require('passport');
const {
  signin,
  signup,
  current_user,
  logout,
  googlesignin
} = require('../controllers/auth');
const jwtAuth = passport.authenticate('jwt', { session: false });
const localAuth = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', jwtAuth, function(req, res) {
    res.send({ message: 'secret' });
  });
  app.post('/api/signin', localAuth, signin);
  app.post('/api/signup', signup);
  // google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    googlesignin
  );
  app.get('/api/current_user', current_user);
  app.get('/api/logout', logout);
};
