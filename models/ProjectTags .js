const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectTagSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  project_id: {
    type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
  
  }
});

const ProjectTag = mongoose.model('ProjectTag', projectTagSchema);

module.exports = ProjectTag;
