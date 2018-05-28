const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('./routes/router');
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

require('./models/User');
require('./models/Building');
require('./models/Project');
require('./utils/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.json({ type: '*/*' }));
router(app);
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
