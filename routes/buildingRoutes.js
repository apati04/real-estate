const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Building = mongoose.model('buildings');

module.exports = app => {
  // save building data into db
  app.post('/api/building', requireAuth, async (req, res) => {
    console.log(req.body);
    res.end('done');
  });
};
