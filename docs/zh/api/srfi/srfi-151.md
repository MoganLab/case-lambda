# SRFI-151: 位运算

SRFI-151 提供了位运算操作。

## 导入

```scheme
(import (srfi srfi-151))
; 或
(import (liii bitwise))  ; Goldfish 扩展版本
```

## 基本运算

| 函数           | 描述 | 示例                         |
| -------------- | ---- | ---------------------------- |
| `bitwise-and`  | 与   | `(bitwise-and 5 3)` => `1`   |
| `bitwise-ior`  | 或   | `(bitwise-ior 5 3)` => `7`   |
| `bitwise-xor`  | 异或 | `(bitwise-xor 5 3)` => `6`   |
| `bitwise-not`  | 非   | `(bitwise-not 5)` => `-6`    |
| `bitwise-eqv`  | 等价 | `(bitwise-eqv 5 3)` => `-7`  |
| `bitwise-nand` | 与非 | `(bitwise-nand 5 3)` => `-2` |
| `bitwise-nor`  | 或非 | `(bitwise-nor 5 3)` => `-8`  |

## 位操作

| 函数               | 描述   | 示例                             |
| ------------------ | ------ | -------------------------------- |
| `arithmetic-shift` | 移位   | `(arithmetic-shift 5 2)` => `20` |
| `bit-count`        | 计数   | `(bit-count 5)` => `2`           |
| `integer-length`   | 位数   | `(integer-length 5)` => `3`      |
| `bit-set?`         | 测试位 | `(bit-set? 0 5)` => `#t`         |
| `copy-bit`         | 复制位 | `(copy-bit 1 5 #t)` => `7`       |

## 位字段

| 函数               | 描述     | 示例                                    |
| ------------------ | -------- | --------------------------------------- |
| `bit-field`        | 提取字段 | `(bit-field #b101101 2 5)` => `6`       |
| `bit-field-any?`   | 任意设置 | `(bit-field-any? #b101101 1 4)` => `#t` |
| `bit-field-every?` | 全部设置 | `(bit-field-every? #b111 0 3)` => `#t`  |
| `bit-field-clear`  | 清除字段 | `(bit-field-clear #b1111 1 3)` => `9`   |
| `bit-field-set`    | 设置字段 | `(bit-field-set #b1000 1 3)` => `14`    |

## 更多函数

更多详细文档请参考 [(liii bitwise)](../liii/bitwise.md)。
