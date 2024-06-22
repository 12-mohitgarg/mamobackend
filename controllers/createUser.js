const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    
    res.status(400).json({ error: err.message });
    console.log(err);
  }
};
