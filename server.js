const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const DIST_DIR = path.join(__dirname, 'build')

io.on('connection', socket => {
  socket.on('clientColorChange', color => {
    socket.broadcast.emit('serverColorChange', color)
  })
})

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

http.listen(8000, () => {
  console.log('listening on http://localhost:8000')
})
