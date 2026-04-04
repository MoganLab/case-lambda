# (liii check)

基于 SRFI-78 的轻量级测试框架。

## 导入

```scheme
(import (liii check))
```

## 函数

### `check`

检查表达式是否等于期望值。

```scheme
(check (+ 1 2) => 3)
(check (square 5) => 25)
```

### `check-catch`

检查是否抛出指定异常。

```scheme
(check-catch 'type-error (require-int "foo"))
(check-catch 'value-error (safe-divide 1 0))
```

### `check-report`

输出测试报告。

```scheme
(check-report)
;; => *** checks *** : 10 correct, 0 failed.
```

## 完整示例

```scheme
(import (liii base)
        (liii check))

(define (square n) (* n n))
(define (factorial n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))))

(check (square 5) => 25)
(check (factorial 5) => 120)
(check (+ 1 2 3) => 6)

(check-report)
```

## 运行测试

```bash
gf test
# 或
gf my-test.scm
```
