const Project = require('../models/Projects');

exports.createProject = async (req, res) => {

  try {

    const { name, description, userId } = req.body;
    const newProject = new Project({ name, description, user_id: userId });
    await newProject.save();

    res.status(201).json(newProject);
  } catch (err) {
    
    res.status(400).json({ error: err.message });
  }
};
