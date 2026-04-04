# (liii vector)

向量操作库，基于 SRFI-133。

## 导入

```scheme
(import (liii vector))
```

## 构造函数

```scheme
(vector-unfold (lambda (i) (* i i)) 5)
;; => #(0 1 4 9 16)

(vector-copy #(1 2 3 4 5) 1 4)
;; => #(2 3 4)
```

## 选择器

```scheme
(vector-ref #(1 2 3 4 5) 2)
;; => 3

(vector-first #(1 2 3))
;; => 1

(vector-last #(1 2 3))
;; => 3
```

## 迭代

```scheme
(vector-map (lambda (x) (* x x)) #(1 2 3 4 5))
;; => #(1 4 9 16 25)

(vector-fold + 0 #(1 2 3 4 5))
;; => 15

(vector-for-each (lambda (x) (display x)) #(1 2 3))
;; 输出: 123
```

## 搜索

```scheme
(vector-index even? #(1 3 4 5))
;; => 2

(vector-index-right odd? #(2 4 5 6))
;; => 2

(vector-skip zero? #(0 0 1 2 3))
;; => 2
```

## 更多函数

更多向量函数请参见 [(srfi srfi-133)](../srfi/srfi-133.md)。
