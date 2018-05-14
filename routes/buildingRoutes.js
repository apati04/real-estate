const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Building = mongoose.model('Building');

module.exports = app => {
  // save building data into db
  app.post('/api/building', requireAuth, async (req, res) => {
    const {
      address,
      longitude,
      latitude,
      rennovated,
      owner,
      built,
      website,
      color,
      placemark,
      notes,
      certifications,
      prevOwner,
      imageUrl,
      _project
    } = req.body;
    console.log('imageUrl: ', imageUrl);
    const building = new Building({
      imageUrl,
      address,
      longitude,
      latitude,
      rennovated,
      owner,
      built,
      website,
      color,
      placemark,
      notes,
      certifications,
      prevOwner,
      _project: _project,
      _user: req.user.id
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
  app.delete(
    '/api/building/delete/:id',
    requireAuth,
    async (req, res, next) => {
      const buildingId = req.params.id;
      try {
        const deleteBuilding = await Building.findByIdAndRemove({
          _id: buildingId
        });
        res.send(deleteBuilding);
      } catch (error) {
        res.status(422).send(error);
      }
    }
  );
};
