const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 8080;

require('./models/User');
require('./utils/passport');

mongoose.Promise = global.Promise;
mongoose.connect();
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['scecreta']
  })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
