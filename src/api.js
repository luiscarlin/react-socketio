import openSocket from 'socket.io-client'

// open connection to localhost:8080 (socket.io server)
const  socket = openSocket('http://localhost:8000')

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp))
  socket.emit('subscribeToTimer', 1000)
}

export { subscribeToTimer }