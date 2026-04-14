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
