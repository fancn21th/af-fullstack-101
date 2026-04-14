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
