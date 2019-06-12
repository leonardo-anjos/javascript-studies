const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
  async index(req, res) {
    const post = await Post.find().sort('-createdAt');
    return res.json(post);
  },

  async store(req, res) {
    // console.log(req.body);
    // console.log(req.file);
    const { autor, place, descrition, hashtags } = req.body;
    const { filename: image } = req.file;

    // return res.json(req.file);
    
    // save image to format jpg
    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    // resized image and store on folder 
    await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(path.resolve(req.file.destination, 'resized', fileName));

    // delete original image
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      autor, place, descrition, hashtags, image: fileName
    });

    req.io.emit('post', post);

    return res.json(post)
  }
};