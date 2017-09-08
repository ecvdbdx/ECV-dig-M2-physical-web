const express = require('express');
const path = require('path');
const settings = require('../settings.js');
const getProducts = require('./products.js');

const app = express();

console.log('on');

// Creates Socket.io server to receive events from webserver
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Creates Socket.io client to emit events to webserver
const clientio = require('socket.io-client');
const client = clientio.connect(`${settings.WEBSERVER_ADDRESS}:${settings.WEBSERVER_SOCKET_PORT}`);

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('product', (product) => {
    client.emit('busy');
    getProducts(product).then(() => {
      client.emit('available');
    });
  });
});

http.listen(settings.PISERVER_PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${settings.PISERVER_PORT}`);
});
