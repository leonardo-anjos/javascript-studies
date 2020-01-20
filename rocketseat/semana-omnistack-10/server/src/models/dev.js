const mongoose = require('mongoose');
const GeoLocationSchema = require('./geoLocation');

const DevSchema = new mongoose.Schema({
  name: String,
  githubUsername: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: GeoLocationSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('devs', DevSchema);