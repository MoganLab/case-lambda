# SRFI-16: Case-lambda

SRFI-16 提供了 `case-lambda`，用于定义具有多种参数模式的函数。

## 导入

```scheme
(import (srfi srfi-16))
; 或
(import (scheme case-lambda))
```

## 语法

### `case-lambda`

```scheme
(case-lambda
  (<formals> <body> ...)
  ...)
```

根据实际传入的参数数量，选择匹配的参数列表执行。

## 示例

### 灵活的构造函数

```scheme
(import (srfi srfi-16))

(define make-list
  (case-lambda
    ((n) (make-list n #f))
    ((n fill)
     (let loop ((n n) (result '()))
       (if (zero? n)
           result
           (loop (- n 1) (cons fill result)))))))

(make-list 3)
;; => (#f #f #f)

(make-list 3 'x)
;; => (x x x)
```

### 多参数处理

```scheme
(define display*
  (case-lambda
    ((x) (display x) (newline))
    ((x port) (display x port) (newline))))

(display* "hello")           ; 输出到 stdout
(display* "hello" port)      ; 输出到指定 port
```

### 求和函数

```scheme
(define sum
  (case-lambda
    (() 0)
    ((x) x)
    ((x y) (+ x y))
    ((x y . rest) (apply sum (+ x y) rest))))

(sum)           ; => 0
(sum 5)         ; => 5
(sum 1 2)       ; => 3
(sum 1 2 3 4 5) ; => 15
```

## 与 define\* 的关系

在 Goldfish Scheme 中，`define*` 是 `case-lambda` 的语法糖，提供更简洁的语法：

```scheme
;; 使用 case-lambda
(define foo
  (case-lambda
    (() 0)
    ((x) x)
    ((x y) (+ x y))))

;; 使用 define*（推荐）
(define* (foo (x 0) (y 0))
  (+ x y))
```
