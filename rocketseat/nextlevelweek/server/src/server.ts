import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('list users');
  response.json([
    'antonio',
    'leonardo',
    'anjos'
  ]);
});

app.listen(3003);