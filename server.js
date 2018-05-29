const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
const http = require('http');
const router = require('./routes/router');
const keys = require('./config/keys');
const session = require('express-session');
const flash = require('connect-flash');
const PORT = process.env.PORT || 5000;
require('./utils/passport');
// require('./models/Building');
// require('./models/Project');
// require('./utils/passport');

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
app.options('*', cors());

require('./routes/twitter')(app);
require('./routes/buildingRoutes')(app);
require('./routes/projectRoutes')(app);
require('./routes/awsRoutes')(app);
require('./routes/apiRoutes')(app);
require('./routes/router')(app);
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

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
