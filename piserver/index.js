const express = require('express');
const settings = require('../settings.js');
const rpio = require('rpio');

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

    switch (product) {
        case 'A23':
            console.log('A23');
            rpio.open(15, rpio.OUTPUT, rpio.HIGH);
            rpio.write(15, rpio.LOW);
            rpio.sleep(5.2);
            rpio.write(15, rpio.HIGH);
            client.emit('done');
            break;
        case 'A22':
            console.log('A22');
            rpio.open(11, rpio.OUTPUT, rpio.HIGH);
            rpio.write(11, rpio.LOW);
            rpio.sleep(5.2);
            rpio.write(11, rpio.HIGH);
            client.emit('done');
            break;
        case 'A51':
            console.log('A51');
            rpio.open(12, rpio.OUTPUT, rpio.HIGH);
            rpio.write(12, rpio.LOW);
            rpio.sleep(5.2);
            rpio.write(12, rpio.HIGH);
            client.emit('done');
            break;
        case 'A52':
            console.log('A52');
            rpio.open(16, rpio.OUTPUT, rpio.HIGH);
            rpio.write(16, rpio.LOW);
            rpio.sleep(5.2);
            rpio.write(16, rpio.HIGH);
            client.emit('done');
            break;
        case 'A53':
            console.log('A53');
            rpio.open(18, rpio.OUTPUT, rpio.HIGH);
            rpio.write(18, rpio.LOW);
            rpio.sleep(5.2);
            rpio.write(18, rpio.HIGH);
            client.emit('done');
            break;
        default:
            client.emit('done');
      }
  });
});

http.listen(settings.PISERVER_PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${settings.PISERVER_PORT}`);
});
