---
prev:
  text: '安全'
  link: '/security'
next:
  text: 'Websockets'
  link: '/websockets'
---

# 持续集成 (Continuous Integration)

## 版本控制基础

持续集成的基石是版本控制 (Version Control)。你需要掌握 Git 的基础操作。

```bash
# 初始化仓库
git init

# 基础工作流
git add .                         # 暂存所有更改
git commit -m "feat: add feature" # 提交更改
git status                        # 查看仓库状态
git log --oneline                 # 查看提交历史
```

## 配置 SSH 密钥

配置 SSH 密钥以便与 GitHub 通信：

```bash
# 生成密钥
ssh-keygen -t ed25519 -C "your_email@example.com"

# 查看公钥（添加到 GitHub Settings > SSH Keys）
cat ~/.ssh/id_ed25519.pub

# 测试连接
ssh -T git@github.com
```

## 推送到远程仓库

```bash
# 添加远程仓库
git remote add origin git@github.com:username/repo.git

# 推送代码
git push -u origin main

# 后续推送
git push
```

::: tip 进阶方向
自动化 CI/CD 流水线的构建（如 GitHub Actions、GitLab CI）可以作为后续进阶探索的方向。
:::
