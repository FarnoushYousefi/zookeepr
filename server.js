const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//The extended: true option set inside the method call informs our server that there may be sub-array data nested in it as well, so it needs to look as deep into the POST data as possible to parse all of the data correctly.
//The reason for this is that there's a piece missing from our server configuration. Our server doesn't know what type of data we are looking to receive with a POST request. This is because there are options, as we saw when we looked at the Body dropdown list in Insomnia. We're going to have to instruct Express.js on how to handle incoming data and set something up known as middleware.
//When a client communicates with a server to transfer data, either from client to server (POST) or from server to client (GET), that communication happens over HTTP. Unfortunately, HTTP doesn't really understand the type of data we send. It just sees raw data that it needs to transfer.
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
//Middleware functions can serve many different purposes. Ultimately they allow us to keep our route endpoint callback functions more readable while letting us reuse functionality across routes to keep our code DRY.
// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
