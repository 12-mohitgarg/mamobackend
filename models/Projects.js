const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    
  }
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
