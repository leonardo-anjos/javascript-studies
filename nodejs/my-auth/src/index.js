require('dotenv-safe').config();
const mongoose = require('mongoose');
const usersRoute = require('./routes/user');
const express = require('express');

const app = express();

// use config module to get the privatekey, if no private key set, end the application
if (!process.env.PRIVATE_KEY) {
  console.error('FATAL ERROR: private key is not defined.');
  process.exit(1);
}

// database connect
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());

// use users route for api/users
app.use('/api/users', usersRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));