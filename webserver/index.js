const express = require('express');
const path = require('path');
const settings = require('../settings.js');

const app = express();

express.static('views/dist');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/dist/index.html'));
});

app.listen(settings.WEBSERVER_PORT, () => {
  console.log(`Server listening on port ${settings.WEBSERVER_PORT}`);
});