require('dotenv-safe').config();
const mongoose = require('mongoose');

const File = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
}, {
  timestamps:true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

File.virtual('url').get(function() {
  return `http:localhost:${process.env.port}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);