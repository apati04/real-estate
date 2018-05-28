const passportConfig = require('./services/passport');
const passport = require('passport');
const Authentication = require('./controllers/auth');
const jwtAuth = passport.authenticate('jwt', { session: false });
const localAuth = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', jwtAuth, function(req, res) {
    res.send({ message: 'secret' });
  });
  app.post('/signin', localAuth);
  app.post('/signup');
};
