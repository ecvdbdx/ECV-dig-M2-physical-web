const express = require('express');
const path = require('path');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

express.static('static');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen('8080', () => {
  console.log('Server listening on port 8080');
});