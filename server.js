const path = require('path')
const port = process.env.PORT || 8080

const express = require('express')
const app = express()
var http = require('http').createServer(app)
const io = require("socket.io")(http)

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('post message', msg => {
    console.log('message: ' + msg)
    io.sockets.emit('post message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

// const server = app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

// const socketIO = require('socket.io')
// const io = socketIO(server)

// io.on('connection', socket => {
//   console.log('Client connected')

//   socket.on("post", (text) => {
//     console.log(text)
//   })

//   socket.on("disconnect", () => {
//     console.log("Client disconnected")
//   })
// })