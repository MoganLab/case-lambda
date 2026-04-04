# (liii bitwise)

位运算库，基于 SRFI-151。

## 导入

```scheme
(import (liii bitwise))
```

## 基本运算

### `bitwise-and`

按位与。

```scheme
(bitwise-and 5 3)
;; => 1  ; 101 & 011 = 001
```

### `bitwise-ior`

按位或。

```scheme
(bitwise-ior 5 3)
;; => 7  ; 101 | 011 = 111
```

### `bitwise-xor`

按位异或。

```scheme
(bitwise-xor 5 3)
;; => 6  ; 101 ^ 011 = 110
```

### `bitwise-not`

按位非。

```scheme
(bitwise-not 5)
;; => -6  ; ~101 = ...11111010
```

## 位移

### `arithmetic-shift`

算术移位。

```scheme
(arithmetic-shift 5 2)
;; => 20  ; 5 << 2 = 10100

(arithmetic-shift 20 -2)
;; => 5   ; 20 >> 2 = 101
```

## 位测试

### `bit-set?`

测试位是否设置。

```scheme
(bit-set? 0 5)
;; => #t  ; 5 = 101, bit 0 is 1

(bit-set? 1 5)
;; => #f  ; 5 = 101, bit 1 is 0

(bit-set? 2 5)
;; => #t  ; 5 = 101, bit 2 is 1
```

## 位操作

### `copy-bit`

设置或清除某一位。

```scheme
(copy-bit 1 5 #t)
;; => 7  ; 101 -> 111

(copy-bit 0 5 #f)
;; => 4  ; 101 -> 100
```

### `bit-count`

计算置位位数。

```scheme
(bit-count 5)
;; => 2  ; 101 has 2 bits set

(bit-count -1)
;; => -1 ; all bits set in two's complement
```

## 更多函数

更多位运算函数请参见 [(srfi srfi-151)](../srfi/srfi-151.md)。
