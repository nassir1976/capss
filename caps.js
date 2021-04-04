  'use strict';

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

const caps = io.of('/caps');



const queue = {
  pickup: {},
  intransit: {},
  delivered: {},
  received: {},
};




// Global stuff
caps.on('connection', (socket) => {
  socket.on('pakageready',payload=>{
  queue.sent[payload.orderID]= payload
  socket.broadcast.emit('pakageready',payload)
  })
  console.log('new connection created ', socket.id);

  //   pickup
  socket.on('pickup', payload => {  ///two/// to Q
    console.log(payload.orderID)
    queue.pickup[payload.orderID] = payload
    socket.broadcast.emit('pickup', payload) ///two/// to Q

  });

  socket.on('intransit', (payload) => {
    // console.log('INTRANSIT EVENT:', payload)
    socket.broadcast.emit('intransit', payload)


  });

  socket.on('delivered', (payload) => {
    delete queue.pickup[payload.orderID]
    queue.delivered[payload] = payload
    // console.log('DELIVERED EVENT:', payload)
    socket.broadcast.emit('delivered', payload)

  })

  socket.on('getDriverMessages', () => {
    Object.keys(queue.pickup).forEach(orderID => {
      socket.emit('pickup', { orderID, payload: queue.pickup[orderID] });
    })
  })
  socket.on('getVendorMessages', () => {
    Object.keys(queue.delivered).forEach(orderID => {
      socket.emit('delivered', { orderID, payload: queue.pickup[orderID] });
    })
  })

})
// socket.on('getDriverMessages', () => {
  //   for (let key in queue.pickup) {
  //     socket.emit('pickup', queue.pickup[key])
  //   }
  //   socket.on('getVendorMessages', () => {
  //     for (let key in queue.delivered) {
  //       socket.emit('delivered', queue.delivered[key])
  //     }
  //   })
  // })
// })
