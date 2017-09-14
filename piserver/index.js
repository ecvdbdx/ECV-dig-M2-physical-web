const express = require('express');
const rpio = require('rpio');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const clientio = require('socket.io-client');

const settings = require('../settings.js');
const events = require('../socket-events');
const machine = require('../machine-mapping');

// Creates Socket.io client to emit events to webserver
const client = clientio.connect(settings.URL_SOCKET);

io.on(events.CONNECTION, (socket) => {
    console.log('New client connected: ', socket.handshake.address);

    socket.on(events.PRODUCT, (product) => {
        console.log('New product requested: ', product);

        console.log(`Emit new event: ${events.BUSY}`);
        client.emit(events.BUSY);

        if (machine[product]) {
            distributeProduct(product);
        } else {
            client.emit(events.DONE);
        }
    });
});

function distributeProduct(product) {
    console.log('Start distributing product: ', product);
    rpio.open(machine[product].pin_line, rpio.OUTPUT, rpio.HIGH);
    rpio.open(machine[product].pin_row, rpio.OUTPUT, rpio.HIGH);
    rpio.write(machine[product].pin_line, rpio.LOW);
    rpio.write(machine[product].pin_row, rpio.LOW);
    rpio.sleep(machine[product].duration);
    rpio.write(machine[product].pin_line, rpio.HIGH);
    rpio.write(machine[product].pin_row, rpio.HIGH);
    console.log('Finished distributing product: ', product);
    console.log(`Emit new event: ${events.DONE}`);
    client.emit(events.DONE, product);
}

http.listen(settings.PORT_PISERVER, '0.0.0.0', () => {
    console.log(`Server listening on port ${settings.PORT_PISERVER}`);
});
