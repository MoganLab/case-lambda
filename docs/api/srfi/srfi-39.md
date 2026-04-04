# SRFI-39: 参数对象

SRFI-39 提供了参数对象，用于动态作用域的变量绑定。

## 导入

```scheme
(import (srfi srfi-39))
```

## 函数

### `make-parameter`

创建参数对象。

```scheme
(define current-user
  (make-parameter "anonymous"))

(current-user)
;; => "anonymous"

(current-user "admin")
(current-user)
;; => "admin"
```

### `parameterize`

动态绑定参数。

```scheme
(define debug-mode
  (make-parameter #f))

(define (do-something)
  (if (debug-mode)
      (display "Debug: doing something")
      (display "Doing something")))

;; 默认情况
(do-something)
;; => "Doing something"

;; 动态绑定
(parameterize ((debug-mode #t))
  (do-something))
;; => "Debug: doing something"

;; 绑定已恢复
(debug-mode)
;; => #f
```

## 完整示例

```scheme
(import (srfi srfi-39)
        (liii base))

;; 定义配置参数
(define current-output-port
  (make-parameter (current-output-port)))

(define current-log-level
  (make-parameter 'info '(debug info warning error)))

;; 使用参数
(define (log-message level message)
  (parameterize ((current-log-level level))
    (display (string-append "[" (symbol->string level) "] " message))
    (newline)))

(log-message 'info "Application started")
;; => [info] Application started
```
