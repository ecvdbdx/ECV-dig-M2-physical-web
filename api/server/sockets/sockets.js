const express = require('express');
const path = require('path');
const cors = require('cors');

const mongojs = require('mongojs');
const db = mongojs('gmab_db');
const products = db.collection('products');

const settings = require('../../../settings.js');
const events = require('../../../socket-events.js');

const app = express();

app.use(cors());

// Creates Socket.io server to receive events from user's client
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Creates Socket.io client to emit events to piserver
const clientio = require('socket.io-client');
const client = clientio.connect(`${settings.PISERVER_ADDRESS}:${settings.PISERVER_PORT}`);

express.static('views/dist');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/dist/index.html'));
});

// GLOBAL VARIABLES
let isBusy = false;

io.on(events.CONNECTION, (socket) => {
    console.log('New client connected: ', socket.handshake.address);
    if (isBusy) {
        console.log(`Emit new event: ${events.BUSY}`);
        socket.emit(events.BUSY);
    }

    socket.on(events.BUSY, () => {
        console.log(`Emit new event: ${events.BUSY}`);
        isBusy = true;
        socket.broadcast.emit(events.BUSY);
    });

    socket.on(events.DONE, (product) => {
        products.update({ 'machine_id': product }, { $inc: { 'current_stock': -1 } }, (err, saved) => {
            if (err) {
                throw err;
            }
            console.log(product, `Stock updated for product: ${product}`);
            console.log(product, `Emit new event: ${events.UPDATE_STOCK}`);
            socket.broadcast.emit(events.UPDATE_STOCK, product);
        });

        console.log(`Emit new event: ${events.DONE}`);
        isBusy = false;
        socket.broadcast.emit(events.DONE);
    });

    socket.on(events.PRODUCT, (product) => {
        console.log(`Emit new event: ${events.PRODUCT} - ${product}`);
        client.emit(events.PRODUCT, product);
    });
});

http.listen(settings.WEBSERVER_SOCKET_PORT, () => {
    console.log(`Server listening on port ${settings.WEBSERVER_SOCKET_PORT}`);
});
