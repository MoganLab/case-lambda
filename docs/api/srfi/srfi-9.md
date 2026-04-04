# SRFI-9: Records

SRFI-9 定义了 `define-record-type`，用于创建记录类型（类似结构体）。

## 导入

```scheme
(import (srfi srfi-9))
```

## 语法

### `define-record-type`

```scheme
(define-record-type <type-name>
  (make-<type> <field-name> ...)
  <predicate>
  (<field-name> <accessor> [<mutator>])
  ...)
```

## 示例

### 定义点类型

```scheme
(define-record-type point
  (make-point x y)
  point?
  (x point-x point-x-set!)
  (y point-y point-y-set!))

;; 创建点
(define p (make-point 3 4))

;; 访问字段
(point-x p)  ; => 3
(point-y p)  ; => 4

;; 修改字段
(point-x-set! p 10)
(point-x p)  ; => 10

;; 类型检查
(point? p)   ; => #t
(point? 42)  ; => #f
```

### 只读记录

```scheme
(define-record-type person
  (make-person name age)
  person?
  (name person-name)
  (age person-age))

(define alice (make-person "Alice" 30))
(person-name alice)  ; => "Alice"
;; (person-name-set! alice "Bob")  ; 错误：未定义
```

### 计算距离

```scheme
(import (liii base))

(define-record-type point
  (make-point x y)
  point?
  (x point-x)
  (y point-y))

(define (point-distance p1 p2)
  (sqrt (+ (square (- (point-x p2) (point-x p1)))
           (square (- (point-y p2) (point-y p1))))))

(define a (make-point 0 0))
(define b (make-point 3 4))
(point-distance a b)  ; => 5
```
