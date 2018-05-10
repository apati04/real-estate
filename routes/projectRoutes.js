const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Project = mongoose.model('Project');

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
};
