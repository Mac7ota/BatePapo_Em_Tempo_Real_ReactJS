const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors:{origin:'http://localhost:5173'}})

const PORT = process.env.PORT || 7228

io.on('connection', socket => {
  console.log('a user connected', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
  })

  socket.on('set_username', username => {
    socket.data.username = username
    console.log(socket.data.username)
  })

  socket.on('message', text => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author: socket.data.username
  })
})
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})