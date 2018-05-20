const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Building = mongoose.model('Building');

module.exports = app => {
  // save building data into db
  app.post('/api/building', requireAuth, async (req, res) => {
    const { formValues } = req.body;

    const building = new Building({
      ...formValues,
      _user: req.user.id,
      dateAdded: Date.now()
    });
    try {
      await building.save();
      res.send(building);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  app.get('/api/building', requireAuth, async (req, res) => {
    const buildings = await Building.find({ _user: req.user.id });
    res.send(buildings);
  });

  app.get('/api/building/:id', requireAuth, async (req, res) => {
    const property = await Building.findOne({
      _id: req.params.id,
      _user: req.user.id
    });
    res.send(property);
  });
  app.delete('/api/building/delete', requireAuth, async (req, res, next) => {
    const { id } = req.query;

    try {
      const delData = await Building.findByIdAndRemove({
        _id: id
      });
      res.send(delData);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
