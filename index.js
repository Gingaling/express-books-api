const books = require('./books');
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send();
});

app.post('/', (req, res) => {
  res.send(`hello ${req.body.name}`);
});

app.listen(4000, () => {
  console.log('app listening on port 4000');
});