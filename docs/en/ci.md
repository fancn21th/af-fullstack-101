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
