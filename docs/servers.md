---
prev:
  text: '命令行'
  link: '/command-line'
next:
  text: '操作系统'
  link: '/operating-systems'
---

# 服务器 (Servers)

## 什么是服务器

### 创建一个 Node Server

Basic node server:

```js
const http = require("http");
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});
server.listen(PORT);
console.log(`Server started on port ${PORT}`);
```

### 什么是端口

端口（Port）是操作系统用来区分不同网络服务的逻辑编号，范围为 0–65535。

常见端口：

| 端口 | 服务 |
|------|------|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 3000 | Node.js（开发常用） |

> 上面代码中的 `PORT = 3000` 就是让服务器监听 3000 端口，浏览器访问 `http://localhost:3000` 即可看到页面。

### 什么是包管理

包管理器（Package Manager）用于安装、更新和管理软件依赖，避免手动下载和配置。

#### Homebrew

macOS 上的系统级包管理器，用于安装命令行工具和应用程序。

```bash
brew install node        # 安装 Node.js
brew update              # 更新 Homebrew
brew list                # 查看已安装的包
```

#### npm

Node.js 的包管理器，用于管理 JavaScript 项目依赖。

```bash
npm init                 # 初始化项目，生成 package.json
npm install express      # 安装依赖包
npm install              # 根据 package.json 安装所有依赖
npm run dev              # 运行自定义脚本
```

> Homebrew 管理**系统工具**，npm 管理**项目依赖**，两者互补。

### 服务器概念

| 概念 | 说明 |
|------|------|
| 🏢 Data Center（数据中心） | 存放物理服务器的设施，提供电力、网络、散热和安全保障 |
| ☁️ Cloud Server（云服务器） | 运行在数据中心之上的虚拟服务器，按需创建、弹性伸缩 |
| 🌐 Cloud Computing（云计算） | 通过互联网按需提供计算、存储、网络等资源的服务模式 |
| ✂️ Virtualization（虚拟化） | 将一台物理服务器的资源划分为多个虚拟计算机 |
| 💻 Virtual Machine（虚拟机） | 物理计算机的数字化版本，独立运行操作系统和应用 |
| 🖥️ VPS（虚拟专用服务器） | Virtual Private Server，从物理服务器中划分出的独立虚拟服务器 |

> 🔗 物理服务器 → 放进数据中心 → 虚拟化为云服务器 → 统称云计算

## Web 服务器与反向代理

深入学习 Nginx。掌握如何配置 Nginx 监听 80 端口，并使用 `proxy_pass` 将网络请求转发到后台运行的 Node.js 应用。

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 进程管理

使用 PM2 等工具来启动和管理后台进程，确保应用在崩溃后能够自动重启。

```bash
# PM2 常用命令
pm2 start app.js          # 启动应用
pm2 list                  # 查看所有进程
pm2 restart app           # 重启应用
pm2 logs                  # 查看日志
pm2 startup               # 设置开机自启
```

## 负载均衡 (Load Balancing)

随着应用的扩展，了解如何使用负载均衡器分配流量。常见的调度算法：

| 算法 | 说明 |
|------|------|
| 轮询 (Round Robin) | 按顺序依次分配请求 |
| IP 哈希 (IP Hash) | 同一 IP 始终路由到同一服务器 |
| 最少连接数 (Least Connections) | 优先分配给当前连接数最少的服务器 |
