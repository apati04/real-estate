const jwt = require('jwt-simple');
const keys = require('../config/keys');
const User = require('../models/User');

function userToken(user) {
  console.log(user);
  return jwt.encode(
    { sub: user.id, iat: new Date().getTime() },
    keys.secretKey
  );
}

exports.signup = function(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'Both email and password are needed' });
  }
  User.findOne({ email }, function(err, dbUser) {
    if (err) {
      return next(err);
    }
    if (dbUser) {
      return res.status(422).send({ error: 'That email is in use' });
    }
    const createUser = new User({ email, password });
    createUser.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ token: userToken(createUser) });
    });
  });
};
exports.signin = function(req, res, next) {
  console.log('signin: ', req.user);
  res.send({ token: userToken(req.user) });
};
exports.current_user = (req, res) => {
  res.json(req.user);
};
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
exports.googlesignin = function(req, res, next) {
  res.redirect('/dashboard');
};
