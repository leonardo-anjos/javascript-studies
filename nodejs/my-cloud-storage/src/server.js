require('dotenv-safe').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors);

const server = require('http').Server(app);
const io = require('socket.io')(server);

// web sockets connection
io.on('connection', socket => {
	socket.on('connectRoom', box => {
		socket.join(box);
	});
});

// databse connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// midlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use((req, res, next) => {
	req.io = io;
	return next();
});

// routes
app.use(require('./routes'));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));