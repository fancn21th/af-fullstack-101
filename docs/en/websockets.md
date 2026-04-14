---
prev:
  text: 'Continuous Integration'
  link: '/en/ci'
next:
  text: 'Databases'
  link: '/en/databases'
---

# Websockets

## Real-Time Bidirectional Communication

Websockets enable real-time bidirectional communication between client and server. Unlike HTTP's request-response model, Websockets maintain a persistent connection allowing the server to push data proactively.

| Feature | HTTP | WebSocket |
|---------|------|-----------|
| Communication | Request-response (one-way) | Bidirectional |
| Connection | Short-lived (new per request) | Persistent |
| Use Cases | API calls, page loads | Chat, notifications, collaboration |

## Socket.io

```js
// Server (Node.js)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('User connected')

  socket.on('message', (data) => {
    io.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

// Client
const socket = io('http://localhost:3000')
socket.emit('message', 'Hello!')
socket.on('message', (data) => console.log(data))
```
