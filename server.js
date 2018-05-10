const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

require('./models/User');
require('./models/Building');
require('./models/Project');
require('./utils/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);
require('./routes/twitter')(app);
require('./routes/buildingRoutes')(app);
require('./routes/projectRoutes')(app);
require('./routes/awsRoutes')(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
if (['production', 'ci'].includes(process.env.NODE_ENV)) {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
