import Server from 'socket.io'
export default (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)

    io.on('connection', (socket) => {
      socket.on('adduser', data => {
        socket.emit('welcome', data.name)
      })

      socket.on('sendMessage', (data, fn) => {
        socket.broadcast.emit('messagereceived', {
          from: data.userName,
          message: data.message
        })

        fn('Message received')
      })
    })

    res.socket.server.io = io
  }

  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}