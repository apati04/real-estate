const passport = require('passport');

module.exports = app => {
  // google
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/projects')
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });
}
