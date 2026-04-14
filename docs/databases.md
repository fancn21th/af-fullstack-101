---
prev:
  text: 'Websockets'
  link: '/websockets'
next:
  text: '容器化'
  link: '/containerization'
---

# 数据库 (Databases)

## 数据库类型选择

了解并区分不同类型的数据库：

### 关系型数据库 (SQL)

| 数据库 | 特点 |
|--------|------|
| MySQL | 最流行的开源关系型数据库 |
| PostgreSQL | 功能强大，支持复杂查询和扩展 |
| MS SQL Server | 微软生态，企业级 |
| SQLite | 轻量级，嵌入式，无需服务器 |

### 非关系型数据库 (NoSQL)

| 数据库 | 类型 | 特点 |
|--------|------|------|
| MongoDB | 文档型 | JSON-like 文档存储 |
| Redis | 键值型 | 内存数据库，极快 |
| Cassandra | 列族型 | 分布式，高可用 |

## SQL 基础

掌握基础的结构化查询语言：

```sql
-- 查询数据
SELECT name, email FROM users WHERE age > 18;

-- 插入数据
INSERT INTO users (name, email, age) VALUES ('张三', 'zhang@example.com', 25);

-- 更新数据
UPDATE users SET email = 'new@example.com' WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;

-- 联表查询
SELECT orders.id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;
```
