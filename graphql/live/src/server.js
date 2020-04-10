const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/live', { useNewUrlParser: true, useUnifiedTopology: true });

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'), // routes
  resolvers // controler
});

server.start();