# SRFI-1: List 库

SRFI-1 提供了全面的列表操作函数。

## 导入

```scheme
(import (srfi srfi-1))
; 或
(import (liii list))  ; Goldfish 扩展版本
```

## 构造函数

| 函数            | 描述               | 示例                                                       |
| --------------- | ------------------ | ---------------------------------------------------------- |
| `cons`          | 构造点对           | `(cons 1 '(2 3))` => `(1 2 3)`                             |
| `list`          | 构造列表           | `(list 1 2 3)` => `(1 2 3)`                                |
| `xcons`         | 反向 cons          | `(xcons '(a b) 'c)` => `(c a b)`                           |
| `cons*`         | 构造 Improper List | `(cons* 1 2 '(3 4))` => `(1 2 3 4)`                        |
| `make-list`     | 创建列表           | `(make-list 5 'x)` => `(x x x x x)`                        |
| `list-tabulate` | 按索引创建         | `(list-tabulate 5 (lambda (i) (* i i)))` => `(0 1 4 9 16)` |
| `list-copy`     | 复制列表           | `(list-copy '(1 2 3))` => `(1 2 3)`                        |
| `circular-list` | 循环列表           | `(circular-list 1 2)` => `#(1 2 1 2 ...)`                  |
| `iota`          | 整数序列           | `(iota 5)` => `(0 1 2 3 4)`                                |

## 谓词

| 函数             | 描述                        |
| ---------------- | --------------------------- |
| `pair?`          | 是否为点对                  |
| `null?`          | 是否为空列表                |
| `proper-list?`   | 是否为 proper list          |
| `circular-list?` | 是否为循环列表              |
| `dotted-list?`   | 是否为 dotted list          |
| `null-list?`     | 是否为空列表（SRFI-1 版本） |
| `list=`          | 列表相等比较                |

## 选择器

| 函数              | 描述                | 示例                                           |
| ----------------- | ------------------- | ---------------------------------------------- |
| `car` / `first`   | 第一个元素          | `(first '(1 2 3))` => `1`                      |
| `cadr` / `second` | 第二个元素          | `(second '(1 2 3))` => `2`                     |
| `caddr` / `third` | 第三个元素          | ...                                            |
| ...               | ...                 | ...                                            |
| `tenth`           | 第十个元素          | `(tenth '(1 2 ... 10))` => `10`                |
| `car+cdr`         | 同时获取 car 和 cdr | `(car+cdr '(1 2 3))` => `1 (2 3)`              |
| `take`            | 取前 n 个           | `(take '(1 2 3 4 5) 3)` => `(1 2 3)`           |
| `drop`            | 丢弃前 n 个         | `(drop '(1 2 3 4 5) 3)` => `(4 5)`             |
| `take-right`      | 从后取 n 个         | `(take-right '(1 2 3 4 5) 2)` => `(4 5)`       |
| `drop-right`      | 从后丢弃 n 个       | `(drop-right '(1 2 3 4 5) 2)` => `(1 2 3)`     |
| `split-at`        | 分割列表            | `(split-at '(1 2 3 4 5) 3)` => `(1 2 3) (4 5)` |
| `last`            | 最后一个元素        | `(last '(1 2 3))` => `3`                       |
| `last-pair`       | 最后一个点对        | `(last-pair '(1 2 3))` => `(3)`                |

## 更多函数

更多详细文档请参考 [(liii list)](../liii/list.md)。
