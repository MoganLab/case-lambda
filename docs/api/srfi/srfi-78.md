# SRFI-78: 轻量级测试框架

SRFI-78 提供了简单的测试框架。

## 导入

```scheme
(import (srfi srfi-78))
; 或
(import (liii check))  ; Goldfish 扩展版本
```

## 函数

### `check`

检查表达式是否等于期望值。

```scheme
(check (+ 1 2) => 3)
```

### `check-ec`

带枚举的批量检查。

```scheme
(check-ec (+ x y) => y ((x 0)) ((y (iota 10))))
```

### `check-report`

输出测试报告。

```scheme
(check-report)
;; => *** checks *** : 10 correct, 0 failed.
```

## 完整示例

```scheme
(import (srfi srfi-78)
        (liii base))

;; 基本测试
(check (+

 1 2) => 3)
(check (* 2 3) => 6)

;; 测试函数
(define (factorial n)
  (if (zero? n) 1 (* n (factorial (- n 1)))))

(check (factorial 0) => 1)
(check (factorial 5) => 120)

;; 报告结果
(check-report)
```

## 更多函数

更多详细文档请参考 [(liii check)](../liii/check.md)。
