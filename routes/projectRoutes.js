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

  app.delete('/api/projects', requireAuth, async (req, res) => {
    const { projectId } = req.query;
    try {
      const removeProject = await Project.findByIdAndRemove({
        _id: projectId
      });
      res.send(removeProject._id);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
