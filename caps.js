const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

const caps = io.of('/caps');

// Global stuff
io.on('connection', (socket) => {
  console.log('new connection created ', socket.id);
  
//   pickup
socket.on('pickup', payload => {
  console.log('PICKUP EVENT:', payload)
  socket.broadcast.emit('pickup', payload)

});

socket.on('intransit', (payload) => {
  console.log('INTRANSIT EVENT:', payload)
  socket.broadcast.emit('intransit', payload)


});

socket.on('delivered', (payload) => {
  console.log('DELIVERED EVENT:', payload)
  socket.broadcast.emit('delivered', payload)
 
})
})