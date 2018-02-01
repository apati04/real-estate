const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 8080;
const app = express();
require('./utils/passport');

app.use(express.static("client/public"));
app.use(session({ secret: "iusdghzvj"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

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
