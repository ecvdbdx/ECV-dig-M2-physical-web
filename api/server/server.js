const express = require('express');
const app = express();
const api = require('./api/api');

// Setup the api
app.use('/api', api);
// Setup the static files
app.use('/static', express.static('assets'));

module.exports = app;