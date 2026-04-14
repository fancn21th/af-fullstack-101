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
