# 全栈开发 101 博客 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a VitePress-based bilingual (zh/en) fullstack learning blog with 9 chapter pages, Claude-inspired warm design system, sidebar navigation, search, and dark/light theme toggle.

**Architecture:** VitePress default theme with CSS variable overrides to implement the Claude (Anthropic) design system. Chinese content at root (`/`), English under `/en/`. Custom CSS in `.vitepress/theme/custom.css` overrides VitePress defaults for colors, typography, and component styles. Each chapter is a standalone Markdown file.

**Tech Stack:** VitePress 1.x, Vue 3, Markdown, CSS custom properties

---

## File Structure

```
af-fullstack-101/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts              # VitePress config: site metadata, i18n, sidebar, search
│   │   └── theme/
│   │       ├── index.ts            # Theme entry: extends default theme, imports custom CSS
│   │       └── custom.css          # Claude design system CSS overrides
│   ├── index.md                    # Chinese hero homepage
│   ├── command-line.md             # Ch01: 命令行
│   ├── servers.md                  # Ch02: 服务器
│   ├── operating-systems.md        # Ch03: 操作系统
│   ├── networking.md               # Ch04: 网络知识
│   ├── security.md                 # Ch05: 安全
│   ├── ci.md                       # Ch06: 持续集成
│   ├── websockets.md               # Ch07: Websockets
│   ├── databases.md                # Ch08: 数据库
│   ├── containerization.md         # Ch09: 容器化
│   └── en/
│       ├── index.md                # English hero homepage
│       ├── command-line.md         # Ch01: Command Line
│       ├── servers.md              # Ch02: Servers
│       ├── operating-systems.md    # Ch03: Operating Systems
│       ├── networking.md           # Ch04: Networking
│       ├── security.md             # Ch05: Security
│       ├── ci.md                   # Ch06: CI
│       ├── websockets.md           # Ch07: Websockets
│       ├── databases.md            # Ch08: Databases
│       └── containerization.md     # Ch09: Containerization
├── package.json
└── .gitignore
```

---

### Task 1: Project Initialization

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `docs/.vitepress/config.mts` (minimal)

- [ ] **Step 1: Initialize project and install VitePress**

```bash
cd /Users/ai-hub/coding/g-af-connector/af-fullstack-101
npm init -y
npm install -D vitepress
```

- [ ] **Step 2: Add VitePress scripts to package.json**

Edit `package.json` scripts section:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

- [ ] **Step 3: Create .gitignore**

Create `.gitignore`:

```
node_modules/
docs/.vitepress/dist/
docs/.vitepress/cache/
.superpowers/
```

- [ ] **Step 4: Create minimal VitePress config**

Create `docs/.vitepress/config.mts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '全栈开发 101',
  description: '从命令行到容器化，一站式全栈开发学习路径',
})
```

- [ ] **Step 5: Create a placeholder index.md to verify setup**

Create `docs/index.md`:

```md
# 全栈开发 101

Welcome — setup works.
```

- [ ] **Step 6: Run dev server to verify**

```bash
npm run docs:dev
```

Expected: VitePress dev server starts, page shows "全栈开发 101" heading at `http://localhost:5173`.

- [ ] **Step 7: Stop dev server and commit**

```bash
git init
git add -A
git commit -m "chore: initialize VitePress project

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 2: Claude Design System CSS

**Files:**
- Create: `docs/.vitepress/theme/index.ts`
- Create: `docs/.vitepress/theme/custom.css`

- [ ] **Step 1: Create theme entry file**

Create `docs/.vitepress/theme/index.ts`:

```ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

- [ ] **Step 2: Create custom.css with Claude design system overrides**

Create `docs/.vitepress/theme/custom.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap');

/* ===== Light Theme (Claude Parchment) ===== */
:root {
  /* Brand */
  --vp-c-brand-1: #c96442;
  --vp-c-brand-2: #d97757;
  --vp-c-brand-3: #c96442;
  --vp-c-brand-soft: rgba(201, 100, 66, 0.12);

  /* Backgrounds */
  --vp-c-bg: #f5f4ed;
  --vp-c-bg-alt: #faf9f5;
  --vp-c-bg-elv: #faf9f5;
  --vp-c-bg-soft: #f0eee6;

  /* Text */
  --vp-c-text-1: #141413;
  --vp-c-text-2: #5e5d59;
  --vp-c-text-3: #87867f;

  /* Borders */
  --vp-c-border: #e8e6dc;
  --vp-c-divider: #f0eee6;
  --vp-c-gutter: #f0eee6;

  /* Typography */
  --vp-font-family-base: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --vp-font-family-mono: 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', monospace;

  /* Sidebar */
  --vp-sidebar-bg-color: #f5f4ed;

  /* Button */
  --vp-button-brand-bg: #c96442;
  --vp-button-brand-hover-bg: #d97757;
  --vp-button-brand-active-bg: #b8593b;
  --vp-button-brand-border: transparent;
  --vp-button-brand-text: #faf9f5;

  --vp-button-alt-bg: #e8e6dc;
  --vp-button-alt-hover-bg: #d1cfc5;
  --vp-button-alt-active-bg: #c2c0b6;
  --vp-button-alt-border: transparent;
  --vp-button-alt-text: #4d4c48;

  /* Home hero */
  --vp-home-hero-name-color: #141413;

  /* Badge */
  --vp-badge-info-border: #e8e6dc;
  --vp-badge-info-text: #5e5d59;
  --vp-badge-info-bg: #f0eee6;
  --vp-badge-tip-border: #c96442;
  --vp-badge-tip-text: #c96442;
  --vp-badge-tip-bg: rgba(201, 100, 66, 0.12);

  /* Custom properties */
  --claude-terracotta: #c96442;
  --claude-coral: #d97757;
  --claude-parchment: #f5f4ed;
  --claude-ivory: #faf9f5;
  --claude-near-black: #141413;
  --claude-warm-sand: #e8e6dc;
  --claude-border-cream: #f0eee6;
  --claude-ring-warm: #d1cfc5;
}

/* ===== Dark Theme ===== */
.dark {
  --vp-c-bg: #141413;
  --vp-c-bg-alt: #1e1e1c;
  --vp-c-bg-elv: #30302e;
  --vp-c-bg-soft: #30302e;

  --vp-c-text-1: #faf9f5;
  --vp-c-text-2: #b0aea5;
  --vp-c-text-3: #87867f;

  --vp-c-border: #30302e;
  --vp-c-divider: #30302e;
  --vp-c-gutter: #30302e;

  --vp-sidebar-bg-color: #141413;

  --vp-button-alt-bg: #30302e;
  --vp-button-alt-hover-bg: #3d3d3a;
  --vp-button-alt-text: #b0aea5;
}

/* ===== Typography ===== */
.vp-doc h1,
.vp-doc h2,
.vp-doc h3,
.VPHero .name,
.VPFeature .title {
  font-family: 'Playfair Display', Georgia, serif !important;
  font-weight: 500 !important;
}

.vp-doc h1 {
  font-size: 36px;
  line-height: 1.2;
}

.vp-doc h2 {
  font-size: 25px;
  line-height: 1.2;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

.vp-doc h3 {
  font-size: 20px;
  line-height: 1.2;
}

.vp-doc p,
.vp-doc li {
  line-height: 1.6;
}

/* ===== Hero Overrides ===== */
.VPHero .name {
  font-size: 56px !important;
  line-height: 1.1 !important;
}

.VPHero .tagline {
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-2);
  font-size: 20px;
  line-height: 1.6;
}

.VPHero .text {
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-2);
}

/* ===== Sidebar Active State ===== */
.VPSidebar .VPSidebarItem.is-active > .item > .link > .text {
  color: var(--claude-terracotta);
}

.VPSidebar .VPSidebarItem.is-active > .item {
  border-left: 3px solid var(--claude-terracotta);
  padding-left: 12px;
}

/* ===== Nav ===== */
.VPNav {
  background: var(--vp-c-bg-alt) !important;
  border-bottom: 1px solid var(--vp-c-border);
}

/* ===== Feature Cards on Homepage ===== */
.VPFeature {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border) !important;
  border-radius: 12px !important;
  transition: box-shadow 0.2s ease;
}

.VPFeature:hover {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 24px;
}

.VPFeature .title {
  font-size: 20px !important;
  line-height: 1.2 !important;
}

/* ===== Code Blocks ===== */
.vp-doc div[class*='language-'] {
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
}

/* ===== Callout / Custom Blocks ===== */
.vp-doc .custom-block.tip {
  border-color: var(--claude-terracotta);
  background: rgba(201, 100, 66, 0.06);
}

.vp-doc .custom-block.tip .custom-block-title {
  color: var(--claude-terracotta);
}

/* ===== Prev/Next Navigation ===== */
.pager-link .title {
  color: var(--claude-terracotta);
}

/* ===== Scrollbar (Webkit) ===== */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: var(--claude-ring-warm);
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

/* ===== General Polish ===== */
.VPContent {
  background: var(--vp-c-bg);
}

a {
  color: var(--claude-terracotta);
}

a:hover {
  color: var(--claude-coral);
}
```

- [ ] **Step 3: Run dev server to verify theme**

```bash
npm run docs:dev
```

Expected: Page loads with Parchment (#f5f4ed) background, Playfair Display serif heading, Terracotta links. Toggle dark mode via VitePress built-in button — should switch to Near Black (#141413) background.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Claude design system theme overrides

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 3: VitePress Configuration (i18n, Sidebar, Search)

**Files:**
- Modify: `docs/.vitepress/config.mts`

- [ ] **Step 1: Write full VitePress config with i18n, sidebar, and search**

Replace `docs/.vitepress/config.mts` with:

```ts
import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '章节',
    items: [
      { text: '命令行', link: '/command-line' },
      { text: '服务器', link: '/servers' },
      { text: '操作系统', link: '/operating-systems' },
      { text: '网络知识', link: '/networking' },
      { text: '安全', link: '/security' },
      { text: '持续集成', link: '/ci' },
      { text: 'Websockets', link: '/websockets' },
      { text: '数据库', link: '/databases' },
      { text: '容器化', link: '/containerization' },
    ],
  },
]

const enSidebar = [
  {
    text: 'Chapters',
    items: [
      { text: 'Command Line', link: '/en/command-line' },
      { text: 'Servers', link: '/en/servers' },
      { text: 'Operating Systems', link: '/en/operating-systems' },
      { text: 'Networking', link: '/en/networking' },
      { text: 'Security', link: '/en/security' },
      { text: 'Continuous Integration', link: '/en/ci' },
      { text: 'Websockets', link: '/en/websockets' },
      { text: 'Databases', link: '/en/databases' },
      { text: 'Containerization', link: '/en/containerization' },
    ],
  },
]

export default defineConfig({
  title: '全栈开发 101',
  description: '从命令行到容器化，一站式全栈开发学习路径',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '章节', link: '/command-line' },
        ],
        sidebar: zhSidebar,
        docFooter: { prev: '上一篇', next: '下一篇' },
        outline: { label: '本页目录' },
        lastUpdated: { text: '最后更新' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Fullstack 101',
      description: 'A fullstack development learning path from command line to containerization',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Chapters', link: '/en/command-line' },
        ],
        sidebar: { '/en/': enSidebar },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        lastUpdated: { text: 'Last updated' },
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
```

- [ ] **Step 2: Run dev server to verify config**

```bash
npm run docs:dev
```

Expected: Site loads with sidebar navigation, language switcher (中文/English) in nav, search icon in nav, dark/light toggle button.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add i18n config, sidebar navigation, and local search

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 4: Chinese Homepage (Hero)

**Files:**
- Modify: `docs/index.md`

- [ ] **Step 1: Write Chinese hero homepage**

Replace `docs/index.md` with:

```md
---
layout: home
hero:
  name: 全栈开发 101
  text: 从命令行到容器化
  tagline: 一站式掌握全栈开发的核心知识体系。九个章节，系统学习。
  actions:
    - theme: brand
      text: 开始学习 →
      link: /command-line
    - theme: alt
      text: 查看大纲
      link: /command-line
features:
  - icon: 📟
    title: 命令行
    details: 终端与 Shell、VIM 编辑器、文件搜索与日志排查、任务调度
    link: /command-line
  - icon: 🖥️
    title: 服务器
    details: 基础服务器搭建、Nginx 反向代理、PM2 进程管理、负载均衡
    link: /servers
  - icon: 💻
    title: 操作系统
    details: 用户与权限管理、进程控制
    link: /operating-systems
  - icon: 🌐
    title: 网络知识
    details: TCP/UDP 协议、DNS 域名系统、HTTP 协议详解、端口概念
    link: /networking
  - icon: 🔒
    title: 安全
    details: SSH 密钥认证、防火墙配置、HTTPS 加密、双因素认证
    link: /security
  - icon: 🔄
    title: 持续集成
    details: Git 版本控制基础、SSH 配置、远程仓库管理
    link: /ci
  - icon: ⚡
    title: Websockets
    details: 实时双向通信、Socket.io 技术栈
    link: /websockets
  - icon: 🗄️
    title: 数据库
    details: SQL 与 NoSQL 数据库选型、基础 SQL 查询语句
    link: /databases
  - icon: 📦
    title: 容器化
    details: Docker 入门与 Dockerfile 编写、Kubernetes 容器编排
    link: /containerization
---
```

- [ ] **Step 2: Run dev server to verify homepage**

```bash
npm run docs:dev
```

Expected: Homepage shows hero section with "全栈开发 101" serif title, two CTA buttons in Terracotta/Sand colors, and 9 feature cards in a 3-column grid.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Chinese hero homepage with chapter cards

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 5: Chinese Chapter Pages (9 pages)

**Files:**
- Create: `docs/command-line.md`
- Create: `docs/servers.md`
- Create: `docs/operating-systems.md`
- Create: `docs/networking.md`
- Create: `docs/security.md`
- Create: `docs/ci.md`
- Create: `docs/websockets.md`
- Create: `docs/databases.md`
- Create: `docs/containerization.md`

Content is sourced from `docs/requirement.md`. Each page uses consistent frontmatter with `prev`/`next` navigation.

- [ ] **Step 1: Create docs/command-line.md**

```md
---
prev: false
next:
  text: '服务器'
  link: '/servers'
---

# 命令行 (Command Line)

## 终端与 Shell

掌握终端的基础，熟悉 Bash 或 Zsh 等常用 Shell 的配置与重载。

## 基础导航与文件操作

熟练使用 `cd`（切换目录）、`ls`（列出内容）、`mkdir`（创建目录）和 `rm`（删除）来操作系统。

```bash
# 常用命令示例
cd /path/to/directory    # 切换目录
ls -la                   # 列出所有文件（含隐藏文件）
mkdir -p my/nested/dir   # 递归创建目录
rm -rf unwanted-folder   # 删除目录及其内容
```

## VIM 编辑器

掌握在服务器上编辑文件的核心工具 VIM，熟悉其三种基本模式：

- **普通模式** — 导航和命令（默认模式）
- **插入模式** — 编辑文本（按 `i` 进入）
- **命令模式** — 执行命令（按 `:` 进入）

常用操作：保存退出（`:wq`）、强制退出（`:q!`）、保存（`:w`）。

## 搜索与日志排查

学习使用以下工具进行文件搜索和日志查看：

| 命令 | 用途 |
|------|------|
| `find` | 按名称、类型、时间等查找文件 |
| `grep` | 在文件内容中搜索文本模式 |
| `tail` | 查看文件末尾内容（常用 `tail -f` 实时跟踪日志） |
| `cat` | 查看完整文件内容 |

```bash
# 搜索示例
find /var/log -name "*.log" -mtime -1    # 查找最近一天修改的日志
grep -r "error" /var/log/                 # 递归搜索包含 "error" 的日志
tail -f /var/log/syslog                   # 实时跟踪系统日志
```

## 任务调度

了解如何使用 Cron jobs 在特定的时间自动执行 Bash 脚本。

```bash
# Cron 表达式格式：分 时 日 月 周
# 每天凌晨 2 点执行备份脚本
0 2 * * * /home/user/backup.sh

# 每 5 分钟检查一次服务状态
*/5 * * * * /home/user/check-service.sh
```
```

- [ ] **Step 2: Create docs/servers.md**

```md
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
```

- [ ] **Step 3: Create docs/operating-systems.md**

```md
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
```

- [ ] **Step 4: Create docs/networking.md**

```md
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
```

- [ ] **Step 5: Create docs/security.md**

```md
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
```

- [ ] **Step 6: Create docs/ci.md**

```md
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
```

- [ ] **Step 7: Create docs/websockets.md**

```md
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
```

- [ ] **Step 8: Create docs/databases.md**

```md
---
prev:
  text: 'Websockets'
  link: '/websockets'
next:
  text: '容器化'
  link: '/containerization'
---

# 数据库 (Databases)

## 数据库类型选择

了解并区分不同类型的数据库：

### 关系型数据库 (SQL)

| 数据库 | 特点 |
|--------|------|
| MySQL | 最流行的开源关系型数据库 |
| PostgreSQL | 功能强大，支持复杂查询和扩展 |
| MS SQL Server | 微软生态，企业级 |
| SQLite | 轻量级，嵌入式，无需服务器 |

### 非关系型数据库 (NoSQL)

| 数据库 | 类型 | 特点 |
|--------|------|------|
| MongoDB | 文档型 | JSON-like 文档存储 |
| Redis | 键值型 | 内存数据库，极快 |
| Cassandra | 列族型 | 分布式，高可用 |

## SQL 基础

掌握基础的结构化查询语言：

```sql
-- 查询数据
SELECT name, email FROM users WHERE age > 18;

-- 插入数据
INSERT INTO users (name, email, age) VALUES ('张三', 'zhang@example.com', 25);

-- 更新数据
UPDATE users SET email = 'new@example.com' WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;

-- 联表查询
SELECT orders.id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;
```
```

- [ ] **Step 9: Create docs/containerization.md**

```md
---
prev:
  text: '数据库'
  link: '/databases'
next: false
---

# 容器化 (Containerization)

## Docker 入门

了解容器化技术如何提供轻量级、可移植且易于管理的运行环境。

```dockerfile
# Dockerfile 示例：Node.js 应用
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

常用 Docker 命令：

```bash
docker build -t my-app .          # 构建镜像
docker run -p 3000:3000 my-app    # 运行容器
docker ps                         # 查看运行中的容器
docker stop <container_id>        # 停止容器
docker images                     # 查看所有镜像
```

## 容器编排 (Orchestration)

当应用规模扩大时，需要工具来管理和调度多个容器：

| 工具 | 特点 |
|------|------|
| Kubernetes (K8s) | 最流行的容器编排平台，功能强大 |
| Docker Swarm | Docker 原生编排，简单易用 |
| Apache Mesos | 通用集群管理器，支持多种工作负载 |

```yaml
# Kubernetes Pod 定义示例
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: my-app
      image: my-app:latest
      ports:
        - containerPort: 3000
```
```

- [ ] **Step 10: Run dev server to verify all pages**

```bash
npm run docs:dev
```

Expected: All 9 chapter pages accessible via sidebar. Each page shows content with code blocks, tables, and prev/next navigation at the bottom.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: add 9 Chinese chapter pages with content from requirement

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 6: English Homepage

**Files:**
- Create: `docs/en/index.md`

- [ ] **Step 1: Create English hero homepage**

```bash
mkdir -p docs/en
```

Create `docs/en/index.md`:

```md
---
layout: home
hero:
  name: Fullstack 101
  text: From Command Line to Containerization
  tagline: A comprehensive learning path for fullstack development. Nine chapters, systematic learning.
  actions:
    - theme: brand
      text: Start Learning →
      link: /en/command-line
    - theme: alt
      text: View Outline
      link: /en/command-line
features:
  - icon: 📟
    title: Command Line
    details: Terminal & Shell, VIM editor, file search & log analysis, task scheduling
    link: /en/command-line
  - icon: 🖥️
    title: Servers
    details: Server setup, Nginx reverse proxy, PM2 process management, load balancing
    link: /en/servers
  - icon: 💻
    title: Operating Systems
    details: User & permission management, process control
    link: /en/operating-systems
  - icon: 🌐
    title: Networking
    details: TCP/UDP protocols, DNS, HTTP protocol deep dive, ports
    link: /en/networking
  - icon: 🔒
    title: Security
    details: SSH key authentication, firewall configuration, HTTPS encryption, 2FA
    link: /en/security
  - icon: 🔄
    title: Continuous Integration
    details: Git version control basics, SSH configuration, remote repository management
    link: /en/ci
  - icon: ⚡
    title: Websockets
    details: Real-time bidirectional communication, Socket.io
    link: /en/websockets
  - icon: 🗄️
    title: Databases
    details: SQL vs NoSQL database selection, basic SQL queries
    link: /en/databases
  - icon: 📦
    title: Containerization
    details: Docker basics & Dockerfile, Kubernetes orchestration
    link: /en/containerization
---
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: add English hero homepage

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 7: English Chapter Pages (9 pages)

**Files:**
- Create: `docs/en/command-line.md`
- Create: `docs/en/servers.md`
- Create: `docs/en/operating-systems.md`
- Create: `docs/en/networking.md`
- Create: `docs/en/security.md`
- Create: `docs/en/ci.md`
- Create: `docs/en/websockets.md`
- Create: `docs/en/databases.md`
- Create: `docs/en/containerization.md`

- [ ] **Step 1: Create docs/en/command-line.md**

```md
---
prev: false
next:
  text: 'Servers'
  link: '/en/servers'
---

# Command Line

## Terminal & Shell

Master the basics of the terminal. Get familiar with common shells like Bash or Zsh, including their configuration and reloading.

## Basic Navigation & File Operations

Use `cd` (change directory), `ls` (list contents), `mkdir` (create directory), and `rm` (remove) to navigate the system.

```bash
cd /path/to/directory    # Change directory
ls -la                   # List all files (including hidden)
mkdir -p my/nested/dir   # Create nested directories
rm -rf unwanted-folder   # Remove directory and contents
```

## VIM Editor

Master VIM — the essential tool for editing files on servers. Learn its three basic modes:

- **Normal Mode** — Navigation and commands (default)
- **Insert Mode** — Edit text (press `i` to enter)
- **Command Mode** — Execute commands (press `:` to enter)

Common operations: save and quit (`:wq`), force quit (`:q!`), save (`:w`).

## Search & Log Analysis

| Command | Purpose |
|---------|---------|
| `find` | Find files by name, type, date |
| `grep` | Search for text patterns in files |
| `tail` | View end of files (`tail -f` for live log following) |
| `cat` | View full file contents |

```bash
find /var/log -name "*.log" -mtime -1    # Find logs modified in last day
grep -r "error" /var/log/                 # Recursively search for "error"
tail -f /var/log/syslog                   # Follow system log in real time
```

## Task Scheduling

Use Cron jobs to automatically execute Bash scripts at specific times.

```bash
# Cron format: minute hour day month weekday
0 2 * * * /home/user/backup.sh       # Run backup daily at 2 AM
*/5 * * * * /home/user/check-service.sh  # Check service every 5 minutes
```
```

- [ ] **Step 2: Create docs/en/servers.md**

```md
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
```

- [ ] **Step 3: Create docs/en/operating-systems.md**

```md
---
prev:
  text: 'Servers'
  link: '/en/servers'
next:
  text: 'Networking'
  link: '/en/networking'
---

# Operating Systems

## User & Permission Management

Learn to create new users, add them to the `sudo` group, and manage file/directory ownership and permissions.

```bash
sudo adduser newuser              # Create new user
sudo usermod -aG sudo newuser     # Add to sudo group
chmod 700 ~/.ssh                  # Secure SSH directory permissions
chown -R user:group /var/www      # Change directory ownership
```

::: tip Security Note
Set SSH key permissions to `700` to prevent unauthorized access.
:::

## Process Control

Learn to view running processes and stop unresponsive ones.

```bash
ps aux                    # View all running processes
ps aux | grep node        # Find Node.js processes
kill <PID>                # Gracefully terminate a process
kill -9 <PID>             # Force terminate a process
top                       # Real-time system resource usage
htop                      # Friendlier process manager
```
```

- [ ] **Step 4: Create docs/en/networking.md**

```md
---
prev:
  text: 'Operating Systems'
  link: '/en/operating-systems'
next:
  text: 'Security'
  link: '/en/security'
---

# Networking Knowledge

## Network Protocol Basics

Understand how the internet works, IPv4 addresses, and the key differences between TCP and UDP.

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Requires 3-way handshake | Connectionless |
| Reliability | Reliable, guarantees delivery | Unreliable, may lose packets |
| Speed | Slower | Faster |
| Use Cases | Web requests, file transfer | Video streaming, gaming, DNS |

## Domain Names & DNS

- **Name Server** — DNS server configuration for your domain
- **A Record** — Maps domain to IP address
- **CNAME Record** — Maps domain to another domain

## HTTP Protocol

Common request headers:

| Header | Purpose |
|--------|---------|
| `User-Agent` | Identifies the client |
| `Accept` | Declares acceptable response formats |
| `Content-Type` | Data format of request body |

Status code categories:

| Range | Meaning | Examples |
|-------|---------|----------|
| 2xx | Success | 200 OK, 201 Created |
| 3xx | Redirect | 301 Moved, 304 Not Modified |
| 4xx | Client Error | 401 Unauthorized, 404 Not Found |
| 5xx | Server Error | 500 Internal Server Error |

## Ports

| Port | Service |
|------|---------|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 3000 | Node.js (dev) |
| 3306 | MySQL |
| 5432 | PostgreSQL |
| 27017 | MongoDB |
```

- [ ] **Step 5: Create docs/en/security.md**

```md
---
prev:
  text: 'Networking'
  link: '/en/networking'
next:
  text: 'Continuous Integration'
  link: '/en/ci'
---

# Security

## SSH Secure Access

Generate SSH key pairs with `ssh-keygen`, configure passwordless login, and disable root login to prevent brute-force attacks.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
ssh-copy-id user@server_ip

# Disable root login (edit /etc/ssh/sshd_config)
PermitRootLogin no
PasswordAuthentication no
```

## Firewall Configuration

Configure UFW (Uncomplicated Firewall) to block unwanted traffic and only open necessary ports.

```bash
sudo ufw enable                  # Enable firewall
sudo ufw allow 22/tcp            # Allow SSH
sudo ufw allow 80/tcp            # Allow HTTP
sudo ufw allow 443/tcp           # Allow HTTPS
sudo ufw status                  # View rules
```

## HTTPS Encryption

Use Certbot (Let's Encrypt) to configure free SSL certificates for Nginx.

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
sudo certbot renew --dry-run     # Test auto-renewal
```

## Additional Security Practices

- **Two-Factor Authentication (2FA)** — Extra login security layer
- **VPN** — Encrypted network communication channel
- **Regular Updates** — Keep server software up to date
```

- [ ] **Step 6: Create docs/en/ci.md**

```md
---
prev:
  text: 'Security'
  link: '/en/security'
next:
  text: 'Websockets'
  link: '/en/websockets'
---

# Continuous Integration

## Version Control Basics

The foundation of CI is version control. Master the basic Git operations.

```bash
git init
git add .
git commit -m "feat: add feature"
git status
git log --oneline
```

## Configuring SSH Keys

Set up SSH keys for GitHub communication:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub    # Add to GitHub Settings > SSH Keys
ssh -T git@github.com        # Test connection
```

## Pushing to Remote Repository

```bash
git remote add origin git@github.com:username/repo.git
git push -u origin main
git push
```

::: tip Next Steps
Building automated CI/CD pipelines (e.g., GitHub Actions, GitLab CI) is a great direction for further learning.
:::
```

- [ ] **Step 7: Create docs/en/websockets.md**

```md
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
```

- [ ] **Step 8: Create docs/en/databases.md**

```md
---
prev:
  text: 'Websockets'
  link: '/en/websockets'
next:
  text: 'Containerization'
  link: '/en/containerization'
---

# Databases

## Database Type Selection

### Relational Databases (SQL)

| Database | Features |
|----------|----------|
| MySQL | Most popular open-source relational database |
| PostgreSQL | Powerful, supports complex queries and extensions |
| MS SQL Server | Microsoft ecosystem, enterprise-grade |
| SQLite | Lightweight, embedded, no server required |

### Non-Relational Databases (NoSQL)

| Database | Type | Features |
|----------|------|----------|
| MongoDB | Document | JSON-like document storage |
| Redis | Key-Value | In-memory database, extremely fast |
| Cassandra | Column Family | Distributed, highly available |

## SQL Basics

```sql
-- Query data
SELECT name, email FROM users WHERE age > 18;

-- Insert data
INSERT INTO users (name, email, age) VALUES ('John', 'john@example.com', 25);

-- Update data
UPDATE users SET email = 'new@example.com' WHERE id = 1;

-- Delete data
DELETE FROM users WHERE id = 1;

-- Join tables
SELECT orders.id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;
```
```

- [ ] **Step 9: Create docs/en/containerization.md**

```md
---
prev:
  text: 'Databases'
  link: '/en/databases'
next: false
---

# Containerization

## Docker Basics

Learn how containerization provides lightweight, portable, and manageable runtime environments.

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

Common Docker commands:

```bash
docker build -t my-app .          # Build image
docker run -p 3000:3000 my-app    # Run container
docker ps                         # View running containers
docker stop <container_id>        # Stop container
docker images                     # View all images
```

## Orchestration

| Tool | Features |
|------|----------|
| Kubernetes (K8s) | Most popular orchestration platform |
| Docker Swarm | Docker-native orchestration, simple |
| Apache Mesos | General-purpose cluster manager |

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: my-app
      image: my-app:latest
      ports:
        - containerPort: 3000
```
```

- [ ] **Step 10: Verify all English pages**

```bash
npm run docs:dev
```

Expected: Navigate to `/en/` — English homepage with hero and 9 feature cards. Click each card — English chapter pages load with sidebar, content, and prev/next navigation. Language switcher toggles between Chinese and English.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: add 9 English chapter pages with bilingual support

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 8: Build & Final Verification

**Files:** None (verification only)

- [ ] **Step 1: Run production build**

```bash
npm run docs:build
```

Expected: Build completes without errors. Output in `docs/.vitepress/dist/`.

- [ ] **Step 2: Preview production build**

```bash
npm run docs:preview
```

Expected: Production site serves at `http://localhost:4173`. Verify:
1. Chinese homepage hero + 9 feature cards
2. English homepage at `/en/`
3. Sidebar navigation works on all pages
4. Dark/light theme toggle works
5. Search finds content in both languages
6. Prev/next navigation on all chapter pages
7. Claude design system colors (Parchment background, Terracotta accents, serif headings)

- [ ] **Step 3: Stop preview server and final commit**

```bash
git add -A
git commit -m "chore: verify production build

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```
