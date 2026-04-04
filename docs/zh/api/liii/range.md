# (liii range)

Range 库，提供高效的区间/范围操作，基于 SRFI-196。

## 导入

```scheme
(import (liii range))
```

## 构造函数

### `numeric-range`

创建数值范围。

```scheme
(numeric-range 0 10)
;; => 0 到 10（不含）的范围

(numeric-range 0 10 2)
;; => 0, 2, 4, 6, 8 的范围
```

### `iota`

创建计数范围。

```scheme
(iota 5)
;; => (0 1 2 3 4)

(iota 5 10)
;; => (10 11 12 13 14)

(iota 5 0 2)
;; => (0 2 4 6 8)
```

## 范围操作

### `range?`

检查是否为范围对象。

```scheme
(range? (numeric-range 0 10))
;; => #t
```

### `range-length`

获取范围长度。

```scheme
(range-length (numeric-range 0 10))
;; => 10

(range-length (numeric-range 0 10 2))
;; => 5
```

### `range-ref`

获取范围中的元素。

```scheme
(range-ref (numeric-range 0 10) 3)
;; => 3

(range-ref (numeric-range 0 10 2) 3)
;; => 6
```

### `range->list`

转换为列表。

```scheme
(range->list (numeric-range 0 5))
;; => (0 1 2 3 4)

(range->list (numeric-range 0 10 2))
;; => (0 2 4 6 8)
```

## 完整示例

```scheme
(import (liii range)
        (liii base)
        (liii list))

;; 遍历范围
(for-each (lambda (i)
            (display i)
            (newline))
          (range->list (numeric-range 0 5)))
;; 输出: 0 1 2 3 4

;; 结合 map
(map (lambda (x) (* x x))
     (range->list (numeric-range 1 6)))
;; => (1 4 9 16 25)

;; 步长范围
(range->list (numeric-range 0 20 5))
;; => (0 5 10 15)
```
