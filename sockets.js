//SERVER-SIDE

const io = require('socket.io')();

io.on('connection', function(socket){

  //Listens for 'send message' event, emits object m to all connections when a 'send message' event is received from chat.js
  socket.on('send message', (m) => {
    io.emit('send message', m);
  });

});

module.exports = io;
