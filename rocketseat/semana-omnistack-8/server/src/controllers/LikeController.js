const DevModel = require('../models/DevModel');

module.exports = {
  
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await DevModel.findById(user); // id user logged
    const targetDev = await DevModel.findById(devId); // id user target from like or dislike

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Yeah! match');
    }

    loggedDev.likes.push(targetDev._id); // add to array 
    await loggedDev.save(); // persist data

    return res.json(loggedDev);
  }

};