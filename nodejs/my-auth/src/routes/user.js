const auth = require('../middlewares/auth');
const bcrypt = require('bcrypt');
const express = require('express');
const { User, validate } = require('../models/user');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

router.get('/:id', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  return res.json(user);
});

router.post('/', auth, async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // find an existing user
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  
  user.password = await bcrypt.hash(user.password, 10);
  
  await user.save();

  const token = user.generateAuthToken();
  
  res.header('authorization', token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });
});

router.delete('/:id', auth, async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.params.id }, 
    { $set: { isDeleted: true }}, 
    { new: false }, (err, doc) => { if (err) return res.send(err) }
  );

  return res.json(user);
});

router.put('/:id', async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.params.id }, 
    { $set: { 
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    }}, 
    { new: false }, (err, doc) => { if (err) return res.send(err) }
  );

  await user.save()

  return res.json(user);
});

module.exports = router;