# (liii list)

列表操作库，基于 SRFI-1 并添加扩展。

## 导入

```scheme
(import (liii list))
```

## SRFI-1 函数

### 构造函数

```scheme
(iota 5)              ; => (0 1 2 3 4)
(circular-list 1 2)   ; => #(1 2 1 2 ...)
(cons* 1 2 3 '(4 5))  ; => (1 2 3 4 5)
(xcons '(a b) 'c)     ; => (c a b)
```

### 选择器

```scheme
(first '(1 2 3 4 5))     ; => 1
(second '(1 2 3 4 5))    ; => 2
(tenth '(1 2 3 4 5 ...)) ; => 10th element

(take '(1 2 3 4 5) 3)    ; => (1 2 3)
(drop '(1 2 3 4 5) 3)    ; => (4 5)
(take-right '(1 2 3 4 5) 2)   ; => (4 5)
(drop-right '(1 2 3 4 5) 2)   ; => (1 2 3)

(last '(1 2 3))          ; => 3
(last-pair '(1 2 3))     ; => (3)
```

### 折叠与映射

```scheme
(fold + 0 '(1 2 3 4 5))      ; => 15
(fold-right cons '() '(1 2 3)) ; => (1 2 3)
(reduce + 0 '(1 2 3 4 5))    ; => 15

(filter even? '(1 2 3 4 5))  ; => (2 4)
(remove odd? '(1 2 3 4 5))   ; => (2 4)
(partition odd? '(1 2 3 4 5)) ; => (1 3 5) (2 4)
```

### 搜索

```scheme
(find even? '(1 2 3 4 5))     ; => 2
(any even? '(1 2 3 4 5))      ; => #t
every odd? '(1 3 5))          ; => #t
(list-index even? '(1 2 3))   ; => 1

(take-while odd? '(1 3 5 2 4))  ; => (1 3 5)
(drop-while odd? '(1 3 5 2 4))  ; => (2 4)
```

## 扩展函数

### 长度检查

```scheme
(length=? 3 '(1 2 3))      ; => #t
(length>? '(1 2 3) 2)      ; => #t
(length>=? '(1 2) 2)       ; => #t
```

### 安全 take/drop

```scheme
(list-take '(1 2 3) 5)     ; => (1 2 3)  ; 不报错
(list-drop '(1 2 3) 5)     ; => ()       ; 不报错
(list-take '(1 2 3) -1)    ; => ()       ; 负数返回空
```

### 列表判断

```scheme
(list-null? '())           ; => #t
(list-not-null? '(1))      ; => #t
(not-null-list? '(1 2))    ; => #t
```

### 扁平化

```scheme
(flatten '((1 2) (3 4)))           ; => (1 2 3 4)
(flatten '((1 2) (3 (4 5))) 2)     ; => (1 2 3 4 5)
(flatten '((1 2) (3 (4 5))) 'deepest) ; => (1 2 3 4 5)
```

### 其他

```scheme
(flat-map (lambda (x) (list x x)) '(1 2 3))
;; => (1 1 2 2 3 3)
```
