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
