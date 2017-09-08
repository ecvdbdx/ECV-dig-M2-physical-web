const express = require('express');
const path = require('path');
const settings = require('../settings.js');
const rpio = require('rpio');

const app = express();

// Creates Socket.io server to receive events from user's client
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Creates Socket.io client to emit events to piserver
const clientio = require('socket.io-client');
const client = clientio.connect(`${settings.WEBSERVER_ADDRESS}:${settings.WEBSERVER_SOCKET_PORT}`);

express.static('static');

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('products', (products) => {
    switch (products) {
      case 'A23':
        rpio.open(7, rpio.OUTPUT, rpio.LOW);
        rpio.write(7, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(7, rpio.LOW);
        break;
      case 'A22':
        rpio.open(11, rpio.OUTPUT, rpio.LOW);
        rpio.write(11, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(11, rpio.LOW);
        break;
      case 'A51':
        rpio.open(13, rpio.OUTPUT, rpio.LOW);
        rpio.write(13, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(13, rpio.LOW);
        break;
      case 'A52':
        rpio.open(15, rpio.OUTPUT, rpio.LOW);
        rpio.write(15, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(15, rpio.LOW);
        break;

    }
    const msg = 'Your product has been delivered';
    client.emit('message', msg);
  });
});

http.listen(settings.PISERVER_PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${settings.PISERVER_PORT}`);
});
