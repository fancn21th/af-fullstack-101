---
prev:
  text: '命令行'
  link: '/command-line'
next:
  text: '操作系统'
  link: '/operating-systems'
---

# 服务器 (Servers)

## 基础服务器搭建

了解如何购买和设置虚拟专用服务器（如阿里云），并在服务器上部署基础的 Node.js 运行环境。

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
