const express = require('express');
const app = express();
const api = require('./api/api');

// setup the api
app.use('/api', api);

module.exports = app;