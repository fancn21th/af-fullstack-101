---
prev:
  text: '网络知识'
  link: '/networking'
next:
  text: '持续集成'
  link: '/ci'
---

# 安全 (Security)

## SSH 安全访问

使用 `ssh-keygen` 生成公钥和私钥对，配置免密登录，并禁用 root 用户的直接登录以防止暴力破解。

```bash
# 生成 SSH 密钥对
ssh-keygen -t ed25519 -C "your_email@example.com"

# 将公钥复制到服务器
ssh-copy-id user@server_ip

# 禁用 root 登录（编辑 /etc/ssh/sshd_config）
PermitRootLogin no
PasswordAuthentication no
```

## 防火墙配置

配置 UFW (Uncomplicated Firewall) 来拦截不需要的网络流量，仅开放必要的端口。

```bash
sudo ufw enable                  # 启用防火墙
sudo ufw allow 22/tcp            # 允许 SSH
sudo ufw allow 80/tcp            # 允许 HTTP
sudo ufw allow 443/tcp           # 允许 HTTPS
sudo ufw status                  # 查看规则状态
```

## HTTPS 加密

使用 Certbot (Let's Encrypt) 等工具为 Nginx 配置免费的 SSL 证书，启用 HTTPS。

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 自动配置 SSL
sudo certbot --nginx -d example.com -d www.example.com

# 证书自动续期
sudo certbot renew --dry-run
```

## 其他安全实践

- **双因素认证 (2FA)** — 增加登录安全层
- **VPN** — 加密网络传输通道
- **定期更新** — 保持服务器软件最新
