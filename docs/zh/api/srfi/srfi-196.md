# SRFI-196: Range 库

SRFI-196 提供了范围（区间）数据类型。

## 导入

```scheme
(import (srfi srfi-196))
; 或
(import (liii range))  ; Goldfish 扩展版本
```

## 构造函数

| 函数            | 描述       | 示例                      |
| --------------- | ---------- | ------------------------- |
| `range`         | 创建范围   | `(range 0 10)`            |
| `numeric-range` | 数值范围   | `(numeric-range 0 10 2)`  |
| `iota-range`    | Iota 范围  | `(iota-range 5)`          |
| `vector-range`  | 向量范围   | `(vector-range #(1 2 3))` |
| `string-range`  | 字符串范围 | `(string-range "hello")`  |

## 谓词

| 函数      | 描述     | 示例                |
| --------- | -------- | ------------------- |
| `range?`  | 检查类型 | `(range? r)`        |
| `range=?` | 比较     | `(range=? = r1 r2)` |

## 属性

| 函数           | 描述     | 示例               |
| -------------- | -------- | ------------------ |
| `range-length` | 长度     | `(range-length r)` |
| `range-first`  | 第一个   | `(range-first r)`  |
| `range-last`   | 最后一个 | `(range-last r)`   |

## 操作

| 函数            | 描述        | 示例                |
| --------------- | ----------- | ------------------- |
| `range-ref`     | 获取元素    | `(range-ref r 3)`   |
| `range-take`    | 取前 n 个   | `(range-take r 5)`  |
| `range-drop`    | 丢弃前 n 个 | `(range-drop r 5)`  |
| `range->list`   | 转列表      | `(range->list r)`   |
| `range->vector` | 转向量      | `(range->vector r)` |
| `range-reverse` | 反转        | `(range-reverse r)` |

## 更多函数

更多详细文档请参考 [(liii range)](../liii/range.md)。
