const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// supor to protocols http and websocket in real-time data
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://leonardoanjos:1133@cluster0-iejeq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

// varible disponible on all application
// midleware
app.use((req, res, next) => {
  req.io = io;
  next();
})

// permission that all applications external acces the service
app.use(cors());

// route to get image and set on tag img 
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3001);