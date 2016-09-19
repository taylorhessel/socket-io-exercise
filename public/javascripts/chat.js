//CLIENT-SIDE

$(() => {

  var socket = io();

  $('form').submit((e) => {
    //Prevent form from submitting and store user input in userMessage variable
    e.preventDefault();
    let userMessage = $('#m').val();

    //Emits an event to sockets.js identified by the string 'send message' and passes the object {message: userMessage}
    socket.emit('send message', {
      message: userMessage
    });

    //Clears input value
    $('#m').val('');

  });

  //Listens for 'send message' event, appends m.message to the messages ul when a 'send message' event is received from sockets.js
  socket.on('send message', (m) => {
    $('#messages').append(`<li>${m.message}</li>`);
  });

});
