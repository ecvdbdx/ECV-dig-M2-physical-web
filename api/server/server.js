const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./api/api');

// Setup Cors
app.use(cors());
// Setup the api
app.use('/api', api);
// Setup the static files
app.use('/static', express.static('assets'));

module.exports = app;