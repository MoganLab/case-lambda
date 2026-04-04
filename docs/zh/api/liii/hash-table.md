# (liii hash-table)

哈希表操作库，基于 SRFI-125。

## 导入

```scheme
(import (liii hash-table))
```

## 构造函数

```scheme
(make-hash-table)
;; => 空哈希表

(make-hash-table equal?)
;; => 使用 equal? 比较键的哈希表

(alist->hash-table '((a . 1) (b . 2)))
;; => 从关联列表创建哈希表
```

## 谓词

```scheme
(hash-table? ht)
;; => 检查是否为哈希表

(hash-table-empty? ht)
;; => 检查哈希表是否为空

(hash-table-contains? ht 'key)
;; => 检查是否包含指定键
```

## 存取

```scheme
(hash-table-ref ht 'key)
;; => 获取键对应的值

(hash-table-ref ht 'key 'default)
;; => 键不存在时返回默认值

(hash-table-set! ht 'key 'value)
;; => 设置键值对

(hash-table-delete! ht 'key)
;; => 删除键值对
```

## 转换

```scheme
(hash-table->alist ht)
;; => 转换为关联列表

(hash-table-keys ht)
;; => 获取所有键的列表

(hash-table-values ht)
;; => 获取所有值的列表
```

## 更多函数

更多哈希表函数请参见 [(srfi srfi-125)](../srfi/srfi-125.md)。
