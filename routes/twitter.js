const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/projects');
    }
  );
};
