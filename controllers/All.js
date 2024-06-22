const Project = require('../models/Projects');

exports.All = async (req, res) => {
  try {

    const { userId } = req.params;
    const projects = await Project.find({ user_id: userId });

    res.status(200).json(projects);
  } catch (err) {
    
    res.status(400).json({ error: err.message });
  }
};
