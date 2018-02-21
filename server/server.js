const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const public_path = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(public_path));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'jayesh@example.com',
    text: 'Hey. What is going on.',
    createAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('Create Message',message );
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});


