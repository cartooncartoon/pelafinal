const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);



io.on('connect', (socket) => {
 
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    const timestamp = new Date().getTime();

    socket.broadcast.emit('message', { user: user, text: message, timestamp });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      socket.emit('message', { user: 'Admin', text: `${user} has left.` });
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));