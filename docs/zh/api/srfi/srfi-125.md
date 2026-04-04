# SRFI-125: Hash Table

SRFI-125 提供了哈希表数据结构的完整实现。

## 导入

```scheme
(import (srfi srfi-125))
; 或
(import (liii hash-table))  ; Goldfish 扩展版本
```

## 构造函数

| 函数                | 描述           | 示例                             |
| ------------------- | -------------- | -------------------------------- |
| `make-hash-table`   | 创建哈希表     | `(make-hash-table)`              |
| `hash-table`        | 从键值对创建   | `(hash-table 'a 1 'b 2)`         |
| `alist->hash-table` | 从关联列表创建 | `(alist->hash-table '((a . 1)))` |

## 谓词

| 函数                   | 描述     | 示例                             |
| ---------------------- | -------- | -------------------------------- |
| `hash-table?`          | 检查类型 | `(hash-table? ht)`               |
| `hash-table-contains?` | 检查键   | `(hash-table-contains? ht 'key)` |
| `hash-table-empty?`    | 检查空表 | `(hash-table-empty? ht)`         |
| `hash-table=?`         | 比较     | `(hash-table=? eq? ht1 ht2)`     |

## 存取

| 函数                 | 描述         | 示例                                                |
| -------------------- | ------------ | --------------------------------------------------- |
| `hash-table-ref`     | 获取值       | `(hash-table-ref ht 'key)`                          |
| `hash-table-set!`    | 设置值       | `(hash-table-set! ht 'key 'val)`                    |
| `hash-table-delete!` | 删除键       | `(hash-table-delete! ht 'key)`                      |
| `hash-table-intern!` | 不存在则设置 | `(hash-table-intern! ht 'key (lambda () 0))`        |
| `hash-table-update!` | 更新值       | `(hash-table-update! ht 'key (lambda (x) (+ x 1)))` |

## 转换

| 函数                | 描述       | 示例                     |
| ------------------- | ---------- | ------------------------ |
| `hash-table->alist` | 转关联列表 | `(hash-table->alist ht)` |
| `hash-table-keys`   | 获取键列表 | `(hash-table-keys ht)`   |
| `hash-table-values` | 获取值列表 | `(hash-table-values ht)` |

## 更多函数

更多详细文档请参考 [(liii hash-table)](../liii/hash-table.md)。
