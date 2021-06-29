const { animals } = require('./data/animal.json');

const express = require('express');
const app = express();
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});

app.get('./api/animals', (req, res) => {
  res.send('hello');
});
