# (liii error)

Python 风格的错误处理库。

## 导入

```scheme
(import (liii error))
```

## 错误类型

### `os-error`

操作系统错误，类似 Python 的 `OSError`。

```scheme
(os-error "file not found")
;; => 抛出 'os-error 异常
```

### `type-error`

类型错误，类似 Python 的 `TypeError`。

```scheme
(type-error "expected integer")
;; => 抛出 'type-error 异常

(type-error "expected ~a but got ~a" "integer" "string")
;; => 带格式的错误消息
```

### `value-error`

值错误，类似 Python 的 `ValueError`。

```scheme
(value-error "invalid value")
;; => 抛出 'value-error 异常

(value-error "value must be >= ~d" 0)
;; => 带格式的错误消息
```

## 使用示例

```scheme
(import (liii error))

(define (safe-divide a b)
  (if (zero? b)
      (value-error "division by zero")
      (/ a b)))

(define (require-int x)
  (if (integer? x)
      x
      (type-error "expected integer, got ~a" (type-of x))))
```

## 捕获错误

使用 R7RS 的 `guard` 捕获：

```scheme
(guard (ex (else
            (display "Error: ")
            (display ex)
            (newline)))
  (os-error "something went wrong"))
```
