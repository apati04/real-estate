const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Project = mongoose.model('Project');
const Building = mongoose.model('Building');

module.exports = app => {
  app.get('/api/projects', requireAuth, async (req, res, next) => {
    const projects = await Project.find({ _user: req.user.id });
    res.send(projects);
  });
  app.get('/api/projects/:_id', async (req, res, next) => {
    const objId = mongoose.Types.ObjectId(req.params._id);
    const properties = await Building.find({
      _project: objId
    });
    res.send(properties);
  });

  app.post('/api/projects', requireAuth, async (req, res, next) => {
    const { projectTitle, projectDescription } = req.body;
    const project = new Project({
      title: projectTitle,
      description: projectDescription,
      _user: req.user.id
    });
    try {
      await project.save();
      res.send(project);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.post('/api/projects/:_id/new', async (req, res, next) => {
    const testproj = mongoose.Types.ObjectId(req.params._id);
    const { address, owner, built } = req.body;
    const testuser = mongoose.Types.ObjectId('5af4f9c342ad7d2dc05776e0');
    const building = new Building({
      address,
      owner,
      built,
      _project: req.params._id,
      _user: testuser
    });
    try {
      const result = await building.save();
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
