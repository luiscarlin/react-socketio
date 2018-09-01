const io = require('socket.io')()

// websockets are long running duplex channels between the client and the serverd

// handle the connection to the client, so  you can emit (publish) events
io.on('connection', (client) => {
    // here you can start emitting events to the client

    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
          client.emit('timer', new Date());
        }, interval);
      });
});

// start listening for clients
const port = 8000;
io.listen(port);
console.log('listening on port ', port);
