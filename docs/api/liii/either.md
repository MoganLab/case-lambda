# (liii either)

Either 类型库，用于处理可能失败的计算。

## 导入

```scheme
(import (liii either))
```

## 类型

### `either?`

检查是否为 either 类型。

```scheme
(either? (right 42))     ; => #t
(either? (left "error")) ; => #t
(either? 42)             ; => #f
```

### `right?` / `left?`

检查是否为 right/left。

```scheme
(right? (right 42))      ; => #t
(right? (left "error"))  ; => #f
(left? (left "error"))   ; => #t
```

## 构造函数

### `right`

成功的结果。

```scheme
(right 42)
(right "success")
```

### `left`

失败的错误信息。

```scheme
(left "division by zero")
(left 'file-not-found)
```

## 操作

### `either-map`

对 right 中的值应用函数。

```scheme
(either-map (right 5) (lambda (x) (* x x)))
;; => (right 25)

(either-map (left "error") square)
;; => (left "error")
```

### `either-bind`

链式 either 计算。

```scheme
(either-bind (right 5)
             (lambda (x) (right (* x x))))
;; => (right 25)

(either-bind (left "error")
             (lambda (x) (right (* x x))))
;; => (left "error")
```

### `either-get`

获取 right 中的值。

```scheme
(either-get (right 42))
;; => 42

(either-get (left "error") 'default)
;; => default
```

## 完整示例

```scheme
(import (liii either)
        (liii base)
        (liii error))

;; 可能失败的解析
(define (parse-int str)
  (if (string->number str)
      (right (string->number str))
      (left "not a number")))

(parse-int "42")
;; => (right 42)

(parse-int "abc")
;; => (left "not a number")

;; 链式计算
(either-bind (parse-int "10")
             (lambda (x)
               (right (* x x))))
;; => (right 100)
```
