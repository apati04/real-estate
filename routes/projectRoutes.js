const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Project = mongoose.model('Project');
const Building = mongoose.model('Building');

module.exports = app => {
  app.get('/api/projects', requireAuth, async (req, res, next) => {
    const projects = await Project.find({ _user: req.user.id });
    res.send(projects);
  });
  app.get('/api/projects/:projectId', async (req, res, next) => {
    const project = await Project.findOne({
      _id: req.params.id,
      _user: req.user.projectId
    });
    res.send(project);
  });
  app.get('/api/projects', requireAuth, async (req, res, next) => {
    const projects = await Project.find({ _user: req.user.id });
    res.send(projects);
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
  app.post('/api/projects/:_id', async (req, res, next) => {
    const { address, owner, built } = req.body;
    const building = new Building({
      address,
      owner,
      built,
      _project: req.params._id
    });
    try {
      await building.save();
      res.send(building);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
