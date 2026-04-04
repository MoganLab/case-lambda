# (liii case)

模式匹配库。

## 导入

```scheme
(import (liii case))
```

## 函数

### `case*`

增强的 `case` 表达式，支持模式匹配。

```scheme
(case* expr
  (pattern1 result1)
  (pattern2 result2)
  (else default-result))
```

## 示例

```scheme
(import (liii case)
        (liii base))

;; 基本模式匹配
(case* '(1 2 3)
  ((a b c) (+ a b c))
  (else 0))
;; => 6

;; 匹配列表
(case* '(hello world)
  ((x y) (list y x))
  (else '()))
;; => (world hello)
```
