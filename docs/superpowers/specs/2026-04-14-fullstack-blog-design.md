# 全栈开发 101 博客 — 设计规范

## 概述

一个基于 VitePress 的个人学习博客，内容为全栈开发知识体系，包含 9 个独立章节页面。采用 Claude (Anthropic) 设计系统的视觉风格——暖色调、衬线标题、编辑式排版。支持中英双语和深浅主题切换。

## 技术选型

- **框架**: VitePress（Vue 驱动的静态站点生成器）
- **主题**: VitePress 默认主题 + CSS 自定义覆盖（方案 A）
- **语言**: 中英双语（VitePress 内置 i18n，中文为默认语言）
- **部署**: 静态站点，可部署至任意静态托管

## 页面结构

### 首页 (Hero Page)

- 顶部导航栏：Logo（"全栈 101"）、首页/章节链接、语言切换（中/EN）、主题切换（☀️/🌙）、搜索
- Hero 区域：
  - Overline 标签："A FULLSTACK LEARNING PATH"
  - 主标题：`全栈开发 101`（Playfair Display / Georgia 衬线，56px，500 weight）
  - 副标题：`从命令行到容器化，一站式掌握全栈开发的核心知识体系`
  - 两个 CTA 按钮：`开始学习 →`（Terracotta 主色）、`查看大纲`（Warm Sand 次色）
- 章节卡片网格（3 列 × 3 行）：每个卡片含编号、标题、简述

### 章节页面 (Content Pages)

共 9 个章节，每个为独立的 Markdown 页面：

| # | 中文标题 | 英文 slug | 内容概要 |
|---|---------|-----------|---------|
| 01 | 命令行 | command-line | 终端、Shell、VIM、find/grep、Cron |
| 02 | 服务器 | servers | 基础搭建、Nginx 反向代理、PM2、负载均衡 |
| 03 | 操作系统 | operating-systems | 用户权限、进程控制 |
| 04 | 网络知识 | networking | TCP/UDP、DNS、HTTP、端口 |
| 05 | 安全 | security | SSH、UFW、HTTPS/Certbot、2FA |
| 06 | 持续集成 | ci | Git 基础、SSH 密钥、远程仓库 |
| 07 | Websockets | websockets | 实时双向通信、Socket.io |
| 08 | 数据库 | databases | SQL/NoSQL 分类、SQL 基础查询 |
| 09 | 容器化 | containerization | Docker、Dockerfile、K8s/Swarm |

### 章节页面布局

- **侧边栏导航**（左侧固定，240px）：9 个章节链接，当前章节 Terracotta 高亮 + 左边框
- **主内容区**（右侧）：
  - 面包屑导航：`全栈101 / 当前章节`
  - 页面标题（衬线，36px）
  - 页面简介
  - "本章要点" Callout（Terracotta 左边框）
  - Markdown 正文内容（含代码块、列表等）
  - 底部上/下篇导航

## 设计系统

遵循 `docs/design.md` 中定义的 Claude (Anthropic) 设计系统，核心要素：

### 配色

| 角色 | 颜色 | 色值 |
|------|------|------|
| 页面背景 | Parchment | #f5f4ed |
| 卡片/容器 | Ivory | #faf9f5 |
| 品牌色/CTA | Terracotta | #c96442 |
| 主文字 | Near Black | #141413 |
| 副文字 | Olive Gray | #5e5d59 |
| 辅助文字 | Stone Gray | #87867f |
| 边框（浅色） | Border Cream | #f0eee6 |
| 暗色背景 | Dark Surface | #30302e |
| 暗色深背景 | Near Black | #141413 |
| 暗色文字 | Warm Silver | #b0aea5 |

### 字体

- **标题**: Georgia（Anthropic Serif 的替代），weight 500，line-height 1.1–1.3
- **正文/UI**: Inter / system-ui（Anthropic Sans 的替代），weight 400–500，line-height 1.6
- **代码**: JetBrains Mono / monospace，weight 400，line-height 1.6

### 深色主题

- 页面背景：Near Black (#141413)
- 容器背景：Dark Surface (#30302e)
- 文字：Ivory (#faf9f5) / Warm Silver (#b0aea5)
- 边框：Dark Surface (#30302e)
- 所有灰色保持暖色调底色

### 阴影与深度

- 使用 ring shadow（`0px 0px 0px 1px`）替代传统投影
- 卡片悬浮使用极淡阴影（`rgba(0,0,0,0.05) 0px 4px 24px`）
- 无渐变，通过暖色表面色调层次营造深度

### 圆角

- 按钮/输入框：12px
- 卡片/容器：8–12px
- Hero 容器：16px
- 最大圆角：32px

## 功能特性

### 搜索

VitePress 内置本地搜索（基于 minisearch），零配置开箱即用。

### 代码高亮

VitePress 内置 Shiki 语法高亮，暗色代码块背景（Near Black），支持行号和行高亮。

### 上/下篇导航

每个章节页面底部显示前后章节链接，使用 VitePress 的 `prev` / `next` frontmatter 或自动推断。

### 中英双语 (i18n)

- 中文为根目录（`/`）
- 英文在 `/en/` 子目录
- VitePress 内置 i18n 配置切换导航、侧边栏、搜索索引
- 顶部语言切换按钮

### 深浅主题切换

VitePress 内置 appearance 切换（支持 light/dark/auto），通过 CSS 变量覆盖实现设计系统配色。

## 项目目录结构

```
af-fullstack-101/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts           # VitePress 配置
│   │   └── theme/
│   │       ├── index.ts         # 主题入口
│   │       └── custom.css       # Claude 设计系统 CSS 覆盖
│   ├── index.md                 # 中文首页
│   ├── command-line.md
│   ├── servers.md
│   ├── operating-systems.md
│   ├── networking.md
│   ├── security.md
│   ├── ci.md
│   ├── websockets.md
│   ├── databases.md
│   ├── containerization.md
│   └── en/                      # 英文版
│       ├── index.md
│       ├── command-line.md
│       ├── servers.md
│       ├── operating-systems.md
│       ├── networking.md
│       ├── security.md
│       ├── ci.md
│       ├── websockets.md
│       ├── databases.md
│       └── containerization.md
├── docs/design.md               # 设计系统参考（已有）
├── docs/requirement.md           # 内容大纲（已有）
├── package.json
└── .gitignore
```

## 不做的事 (Out of Scope)

- 评论系统
- RSS 订阅
- 流量统计/分析
- 自定义 Vue 组件（使用默认主题 + CSS 覆盖即可）
- 后端服务
- 用户认证
