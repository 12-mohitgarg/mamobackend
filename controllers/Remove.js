const Project = require('../models/Projects');

exports.Remove = async (req, res) => {
  try {
    const { projectId } = req.params;

    await Project.findByIdAndDelete(projectId);
    res.status(204).send();
    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
