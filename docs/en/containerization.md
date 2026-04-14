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
