---
prev:
  text: '服务器'
  link: '/servers'
next:
  text: '网络知识'
  link: '/networking'
---

# 操作系统 (Operating Systems)

## 用户与权限管理

学习创建新用户，并将其添加到 `sudo` 组以获取管理员权限。掌握如何修改文件和目录的所有权及权限。

```bash
# 用户管理
sudo adduser newuser              # 创建新用户
sudo usermod -aG sudo newuser     # 添加到 sudo 组

# 权限管理
chmod 700 ~/.ssh                  # 设置 SSH 目录权限
chown -R user:group /var/www      # 修改目录所有者
```

::: tip 安全提示
将 SSH 密钥权限设置为 `700` 保护安全，防止其他用户访问。
:::

## 进程控制

了解如何查看当前运行的进程，并使用 `kill` 命令停止不需要或卡死的进程。

```bash
ps aux                    # 查看所有运行中的进程
ps aux | grep node        # 查找 Node.js 进程
kill <PID>                # 正常终止进程
kill -9 <PID>             # 强制终止进程
top                       # 实时查看系统资源使用
htop                      # 更友好的进程管理器
```
