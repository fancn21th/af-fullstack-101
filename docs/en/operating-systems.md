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
