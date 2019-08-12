const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index); // list all devs without likes and dislikes
routes.post('/devs', DevController.store); // add new dev
routes.post('/devs/:devId/likes', LikeController.store); // like dev
routes.post('/devs/:devId/dislikes', DislikeController.store); // dislike dev

module.exports = routes;