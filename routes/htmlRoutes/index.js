const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
//This route will take us to /animals. Did you notice how the endpoint here is just /animals? This is the second route we've created so far that doesn't have the term api thrown into it. This is intentional, because when we create routes we need to stay organized and set expectations of what type of data is being transferred at that endpoint.

module.exports = router;
