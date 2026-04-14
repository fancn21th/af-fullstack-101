---
prev:
  text: '操作系统'
  link: '/operating-systems'
next:
  text: '安全'
  link: '/security'
---

# 网络知识 (Networking Knowledge)

## 网络协议基础

理解互联网的工作原理，熟悉 IPv4 地址，以及 TCP 与 UDP 的核心区别。

| 特性 | TCP | UDP |
|------|-----|-----|
| 连接方式 | 需要三次握手 | 无连接 |
| 可靠性 | 可靠，保证数据到达 | 不可靠，可能丢包 |
| 速度 | 较慢 | 较快 |
| 适用场景 | Web 请求、文件传输 | 视频流、游戏、DNS |

## 域名与 DNS

掌握 DNS（域名系统），了解如何配置域名解析：

- **Name Server** — 配置域名使用的 DNS 服务器
- **A 记录** — 将域名映射到 IP 地址
- **CNAME 记录** — 将域名映射到另一个域名

## HTTP 协议

深入理解 HTTP 请求头和状态码。

常见请求头：

| 请求头 | 用途 |
|--------|------|
| `User-Agent` | 标识客户端类型 |
| `Accept` | 声明可接受的响应格式 |
| `Content-Type` | 请求体的数据格式 |

状态码分类：

| 范围 | 含义 | 示例 |
|------|------|------|
| 2xx | 成功 | 200 OK, 201 Created |
| 3xx | 重定向 | 301 Moved, 304 Not Modified |
| 4xx | 客户端错误 | 401 Unauthorized, 404 Not Found |
| 5xx | 服务器错误 | 500 Internal Server Error |

## 端口 (Ports)

理解端口作为网络通信端点的概念。常见端口：

| 端口 | 服务 |
|------|------|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 3000 | Node.js (开发) |
| 3306 | MySQL |
| 5432 | PostgreSQL |
| 27017 | MongoDB |
