const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controller/BoxController');
const FileController = require('./controller/FileController');

routes.post('/boxe', BoxController.store);
routes.get('/boxe/:id', BoxController.show);
routes.post('boxe/:id/file', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;