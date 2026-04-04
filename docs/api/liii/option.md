# (liii option)

Option 类型库（Maybe Monad），用于处理可能不存在的值。

## 导入

```scheme
(import (liii option))
```

## 类型

### `option?`

检查是否为 option 类型。

```scheme
(option? (some 42))     ; => #t
(option? none)          ; => #t
(option? 42)            ; => #f
```

### `some?` / `none?`

检查是否为 some/none。

```scheme
(some? (some 42))       ; => #t
(some? none)            ; => #f
(none? (some 42))       ; => #f
(none? none)            ; => #t
```

## 构造函数

### `some`

包装存在的值。

```scheme
(some 42)
(some "hello")
```

### `none`

表示不存在的值。

```scheme
none
```

## 操作

### `option-map`

对 some 中的值应用函数。

```scheme
(option-map (some 5) (lambda (x) (* x x)))
;; => (some 25)

(option-map none square)
;; => none
```

### `option-flatten`

展平嵌套的 option。

```scheme
(option-flatten (some (some 42)))
;; => (some 42)
```

### `option-get`

获取 some 中的值。

```scheme
(option-get (some 42))
;; => 42

(option-get none 'default)
;; => default
```

## 完整示例

```scheme
(import (liii option)
        (liii base))

;; 安全的除法
(define (safe-divide a b)
  (if (zero? b)
      none
      (some (/ a b))))

(safe-divide 10 2)
;; => (some 5)

(safe-divide 10 0)
;; => none

;; 链式操作
(option-map (safe-divide 10 2) (lambda (x) (* x 3)))
;; => (some 15)
```
