const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Project = mongoose.model('projects');

module.exports = app => {
  app.post('/api/building', requireAuth, async (req, res) => {
    const { title } = req.body;
    const project = new Project({
      title,
      dateAdded: Date.now(),
      _user: req.user.id
    });
    try {
      await project.save();
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
