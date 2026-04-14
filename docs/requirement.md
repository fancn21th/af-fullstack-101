# 大纲

## 命令行 (Command Line)
终端与Shell：掌握终端的基础，熟悉 Bash 或 Zsh 等常用 Shell 的配置与重载。
基础导航与文件操作：熟练使用 cd（切换目录）、ls（列出内容）、mkdir（创建目录）和 rm（删除）来操作系统。
VIM 编辑器：掌握在服务器上编辑文件的核心工具 VIM，熟悉其三种基本模式（普通模式、插入模式、命令模式）以及保存退出（:wq）等操作。遇到只读文件或需要排查时，学习如何在 VIM 中保存或退出。
搜索与日志排查：学习使用 find 查找文件，grep 搜索文本，以及使用 tail 和 cat 查看日志流和文件内容。
任务调度：了解如何使用 Cron jobs 在特定的时间（分、时、日、月）自动执行 Bash 脚本。

##  服务器 (Servers)
基础服务器搭建：了解如何购买和设置虚拟专用服务器（如 阿里云），并在服务器上部署基础的 Node.js 运行环境。
Web 服务器与反向代理：深入学习 Nginx。掌握如何配置 Nginx 监听 80 端口，并使用 proxy_pass 将网络请求转发到后台运行的 Node.js 应用（如 http://127.0.0.1:3000）。
进程管理：使用 PM2 等工具来启动和管理后台进程，确保应用在崩溃后能够自动重启。
负载均衡 (Load Balancing)：随着应用的扩展，了解如何使用负载均衡器分配流量，并熟悉常见的调度算法，如 轮询 (Round Robin)、IP 哈希 (IP Hash) 和 最少连接数 (Least Connections)。

##  操作系统 (Operating Systems)
用户与权限管理：学习创建新用户，并将其添加到 sudo 组以获取管理员权限。掌握如何修改文件和目录的所有权及权限（例如，将 SSH 密钥权限设置为 700 保护安全）。
进程控制：了解如何查看当前运行的进程，并使用 kill 命令停止不需要或卡死的进程。

##  网络知识 (Networking Knowledge)
网络协议基础：理解互联网的工作原理，熟悉 IPv4 地址，以及 TCP（需要三次握手，更可靠） 与 UDP 的核心区别。
域名与 DNS：掌握 DNS（域名系统），了解如何配置 Name Server，以及如何添加 A 记录（映射到 IP）和 CNAME 记录（映射到其他域名）。
HTTP 协议：深入理解 HTTP 请求头（如 User-Agent, Accept, Content-Type），以及不同状态码的含义：2xx（成功）、3xx（重定向）、4xx（客户端错误，如 401 未授权）和 5xx（服务器错误）。
端口 (Ports)：理解端口作为网络通信端点的概念，并熟悉常见的服务端口。

##  安全 (Security)
SSH 安全访问：使用 ssh-keygen 生成公钥和私钥对，配置免密登录，并禁用 root 用户的直接登录以防止暴力破解。
防火墙配置：配置 UFW (Uncomplicated Firewall) 来拦截不需要的网络流量，仅开放必要的端口。
HTTPS 加密：使用 Certbot (Let's Encrypt) 等工具为 Nginx 配置免费的 SSL 证书，启用 HTTPS。
其他安全实践：了解并实施双因素认证 (2FA)、使用 VPN 以及定期更新服务器软件来增强系统安全性。

##  持续集成 (Continuous Integration)
版本控制基础：目前的资料主要集中在持续集成的基石——版本控制 (Version Control)。你需要掌握 Git 的基础操作，包括在服务器上初始化仓库 (git init)、配置 SSH 密钥以便与 GitHub 通信，以及将代码推送到远程仓库。(该部分主要通过最小闭环说明原理，未深入提及自动化 CI/CD 流水线的构建，这部分可以作为后续大家自学与进阶探索的方向。)

##  Websockets
在全栈转型中，Websockets 通常用于实现客户端与服务器之间的实时双向通信。建议在掌握基础的 HTTP 请求-响应模型后，额外补充学习 Socket.io 等相关技术。

##  数据库 (Databases)
数据库类型选择：了解并区分不同类型的数据库。熟悉关系型数据库 (SQL)，如 MySQL、PostgreSQL、MS SQL Server 和轻量级的 SQLite；同时了解非关系型数据库 (NoSQL)，如 MongoDB、Redis 和 Cassandra。
SQL 基础：掌握基础的结构化查询语言，如使用 SELECT、FROM、WHERE 语句进行数据查询与操作。

##  容器化 (Containerization)
Docker 入门：了解容器化技术如何提供轻量级、可移植且易于管理的运行环境。学习编写 Dockerfile 来构建你的应用容器。
容器编排 (Orchestration)：当应用规模扩大时，了解如何使用 Kubernetes (K8s)、Docker Swarm 或 Apache Mesos 等工具来管理和调度多个容器。