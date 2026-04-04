# SRFI-8: Receive

SRFI-8 提供了 `receive` 绑定形式，用于接收多值。

## 导入

```scheme
(import (srfi srfi-8))
; 或包含在
(import (liii base))
```

## 语法

### `receive`

```scheme
(receive <formals> <expression> <body> ...)
```

绑定 `<expression>` 的多个返回值到 `<formals>`，然后执行 `<body>`。

## 示例

### 基本用法

```scheme
(import (srfi srfi-8))

(receive (a b) (values 1 2)
  (+ a b))
;; => 3
```

### 分割列表

```scheme
(receive (head tail) (split-at '(1 2 3 4 5) 2)
  (display head)
  (newline)
  (display tail))
;; => (1 2)
;;    (3 4 5)
```

### 处理除法结果

```scheme
(define (divide n d)
  (values (quotient n d) (remainder n d)))

(receive (q r) (divide 17 5)
  (display q)  ; => 3
  (display r)) ; => 2
```

### 使用 rest 参数

```scheme
(receive (first second . rest) (values 1 2 3 4 5)
  (display first)   ; => 1
  (display second)  ; => 2
  (display rest))   ; => (3 4 5)
```
