const express = require('express');
const path = require('path');
const settings = require('../settings.js');

const app = express();

// Creates Socket.io server to receive events from user's client
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Creates Socket.io client to emit events to piserver
const clientio  = require('socket.io-client');
const client    = clientio.connect(`${settings.PISERVER_ADDRESS}:${settings.PISERVER_PORT}`);

express.static('static');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    // Route event to piserver
    client.emit('piserver', msg);
  });
});

http.listen(settings.WEBSERVER_PORT, () => {
  console.log(`Server listening on port ${settings.WEBSERVER_PORT}`);
});