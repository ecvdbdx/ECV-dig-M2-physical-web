const express = require('express');
const path    = require('path');
const settings = require('../settings.js');

const app = express();

const http = require('http').Server(app);
const io   = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('piserver', (msg) => {
    console.log('message: ' + msg);
  });
});

http.listen(settings.PISERVER_PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${settings.PISERVER_PORT}`);
});