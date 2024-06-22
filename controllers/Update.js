const Project = require('../models/Projects');

exports.Update = async (req, res) => {
  try {
    const { projectId } = req.params;

    const { name, description } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,

      { name, description },
      { new: true }
    );
    
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
