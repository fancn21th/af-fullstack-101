---
prev:
  text: '持续集成'
  link: '/ci'
next:
  text: '数据库'
  link: '/databases'
---

# Websockets

## 实时双向通信

在全栈开发中，Websockets 用于实现客户端与服务器之间的实时双向通信。与传统的 HTTP 请求-响应模型不同，Websockets 建立持久连接，允许服务器主动推送数据。

| 特性 | HTTP | WebSocket |
|------|------|-----------|
| 通信方式 | 请求-响应（单向） | 双向通信 |
| 连接 | 短连接（每次请求重新建立） | 长连接（持久化） |
| 适用场景 | API 调用、页面加载 | 聊天、实时通知、协作编辑 |

## Socket.io

建议在掌握基础的 HTTP 请求-响应模型后，学习 Socket.io 等相关技术。

```js
// 服务端 (Node.js)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('用户已连接')

  socket.on('message', (data) => {
    io.emit('message', data) // 广播给所有客户端
  })

  socket.on('disconnect', () => {
    console.log('用户已断开')
  })
})

// 客户端
const socket = io('http://localhost:3000')
socket.emit('message', 'Hello!')
socket.on('message', (data) => console.log(data))
```
