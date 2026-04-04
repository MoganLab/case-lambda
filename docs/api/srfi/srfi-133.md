# SRFI-133: Vector 库

SRFI-133 提供了全面的向量（数组）操作函数。

## 导入

```scheme
(import (srfi srfi-133))
; 或
(import (liii vector))  ; Goldfish 扩展版本
```

## 构造函数

| 函数            | 描述       | 示例                               |
| --------------- | ---------- | ---------------------------------- |
| `make-vector`   | 创建向量   | `(make-vector 5 'x)`               |
| `vector`        | 从值创建   | `(vector 1 2 3)`                   |
| `vector-unfold` | 按函数创建 | `(vector-unfold (lambda (i) i) 5)` |
| `vector-copy`   | 复制向量   | `(vector-copy vec 1 4)`            |
| `vector-append` | 连接向量   | `(vector-append vec1 vec2)`        |

## 谓词

| 函数            | 描述     | 示例                      |
| --------------- | -------- | ------------------------- |
| `vector?`       | 检查类型 | `(vector? #(1 2 3))`      |
| `vector-empty?` | 检查空   | `(vector-empty? #())`     |
| `vector=`       | 比较     | `(vector= eq? vec1 vec2)` |

## 选择器

| 函数            | 描述     | 示例                  |
| --------------- | -------- | --------------------- |
| `vector-ref`    | 获取元素 | `(vector-ref vec 0)`  |
| `vector-length` | 获取长度 | `(vector-length vec)` |
| `vector-first`  | 第一个   | `(vector-first vec)`  |
| `vector-last`   | 最后一个 | `(vector-last vec)`   |

## 迭代

| 函数              | 描述 | 示例                          |
| ----------------- | ---- | ----------------------------- |
| `vector-map`      | 映射 | `(vector-map f vec)`          |
| `vector-for-each` | 遍历 | `(vector-for-each f vec)`     |
| `vector-fold`     | 折叠 | `(vector-fold kons knil vec)` |
| `vector-count`    | 计数 | `(vector-count pred? vec)`    |

## 搜索

| 函数                 | 描述     | 示例                             |
| -------------------- | -------- | -------------------------------- |
| `vector-index`       | 查找索引 | `(vector-index pred? vec)`       |
| `vector-index-right` | 从右查找 | `(vector-index-right pred? vec)` |
| `vector-skip`        | 跳过     | `(vector-skip zero? vec)`        |
| `vector-any`         | 存在     | `(vector-any pred? vec)`         |
| `vector-every`       | 全部     | `(vector-every pred? vec)`       |

## 更多函数

更多详细文档请参考 [(liii vector)](../liii/vector.md)。
