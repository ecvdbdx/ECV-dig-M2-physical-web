const express = require('express');
const rpio = require('rpio');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const clientio = require('socket.io-client');

const settings = require('../settings.js');
const events = require('../socket-events');

// Creates Socket.io client to emit events to webserver
const client = clientio.connect(`${settings.WEBSERVER_ADDRESS}:${settings.WEBSERVER_SOCKET_PORT}`);

io.on(events.CONNECTION, (socket) => {
    console.log('New client connected: ', socket.handshake.address);

    socket.on(events.PRODUCT, (product) => {
        console.log('New product requested: ', product);

        console.log(`Emit new event: ${events.BUSY}`);
        client.emit(events.BUSY);

        switch (product) {
            case 'A23':
                distributeProduct(15, product, 5.2);
                break;
            case 'A22':
                distributeProduct(11, product, 5.2);
                break;
            case 'A51':
                distributeProduct(12, product, 5.2);
                break;
            case 'A52':
                distributeProduct(16, product, 5.2);
                break;
            case 'A53':
                distributeProduct(18, product, 5.2);
                break;
            default:
                client.emit(events.DONE);
        }
    });
});

function distributeProduct(pin, product, duration) {
    console.log('Start distributing product: ', product);
    rpio.open(pin, rpio.OUTPUT, rpio.HIGH);
    rpio.write(pin, rpio.LOW);
    rpio.sleep(duration);
    rpio.write(pin, rpio.HIGH);
    console.log('Finished distributing product: ', product);
    console.log(`Emit new event: ${events.DONE}`);
    client.emit(events.DONE, product);
}

http.listen(settings.PISERVER_PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${settings.PISERVER_PORT}`);
});
