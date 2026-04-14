---
prev:
  text: 'Command Line'
  link: '/en/command-line'
next:
  text: 'Operating Systems'
  link: '/en/operating-systems'
---

# Servers

## Basic Server Setup

Learn how to purchase and set up a Virtual Private Server (VPS) and deploy a basic Node.js runtime environment.

## Web Server & Reverse Proxy

Deep dive into Nginx. Learn how to configure Nginx to listen on port 80 and use `proxy_pass` to forward requests to your Node.js application.

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

## Process Management

Use tools like PM2 to start and manage background processes, ensuring auto-restart on crashes.

```bash
pm2 start app.js          # Start application
pm2 list                  # View all processes
pm2 restart app           # Restart application
pm2 logs                  # View logs
pm2 startup               # Configure auto-start on boot
```

## Load Balancing

| Algorithm | Description |
|-----------|-------------|
| Round Robin | Distributes requests sequentially |
| IP Hash | Same IP always routes to same server |
| Least Connections | Routes to server with fewest active connections |
