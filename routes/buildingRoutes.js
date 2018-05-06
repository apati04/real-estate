const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Building = mongoose.model('buildings');

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
      prevOwner
    } = req.body;
    const building = new Building({
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
      dateAdded: Date.now(),
      _user: req.user.id
    });
    try {
      await building.save();
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(442).send(error);
    }
  });

  app.get('/api/building', requireAuth, async (req, res) => {
    const buildings = await Building.find({ _user: req.user.id });
    res.send(buildings);
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
/**
 *  try {
      await building.save();
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(442).send(error);
    }
 */
/**
 *   delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
 */
