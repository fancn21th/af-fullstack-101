---
prev:
  text: 'Preface'
  link: '/en/preface'
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
