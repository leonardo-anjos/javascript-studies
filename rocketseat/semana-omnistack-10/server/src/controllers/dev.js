require('dotenv-safe').config();
const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
// const { findConnections, sendMessage } = require('../websocket');

module.exports = {

  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const { githubUsername, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ githubUsername });

    if (!dev) {
      const result = await axios.get(`${process.env.API_GITHUB_URL}/users/${githubUsername}`);

      const { name = login, avatar_url, bio } = result.data;
    
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      dev = await Dev.create({
        githubUsername,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })

      // filter conections that are in the max 10km of distance and have the skills 
      // const sendSocketMessageTo = findConnections(
      //   { latitude, longitude },
      //   techsArray,
      // )

      // sendMessage(sendSocketMessageTo, 'newDev', dev);
    }
  
    return res.json(dev);
  },

};