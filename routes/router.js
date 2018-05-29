const passport = require('passport');
const jwtAuth = passport.authenticate('jwt', { session: false });
const localAuth = passport.authenticate('local', { session: false });
const googleAuth = passport.authenticate('google', { session: false });
const {
  signin,
  signup,
  current_user,
  logout,
  googlesignin
} = require('../controllers/auth');

module.exports = function(app) {
  app.post('/api/signin', localAuth, signin);
  app.post('/api/signup', signup);
  // google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    }),
    function(req, res, net) {
      console.log(req);
    }
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    googlesignin
  );
  app.get('/', jwtAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' });
  });
  app.get('/api/current_user', current_user);
  app.get('/api/logout', logout);
};
