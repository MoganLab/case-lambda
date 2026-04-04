# (scheme time)

时间库。

## 导入

```scheme
(import (scheme time))
```

## 函数

### `current-second`

获取当前时间（自纪元以来的秒数）。

```scheme
(current-second)
;; => 1704067200.0
```

### `current-jiffy`

获取当前 jiffy 计数（高精度计时）。

```scheme
(current-jiffy)
;; => 1234567890123
```

### `jiffies-per-second`

每秒钟的 jiffy 数。

```scheme
(jiffies-per-second)
;; => 1000 或 1000000 等
```

## 完整示例

```scheme
(import (scheme time)
        (scheme base))

;; 测量函数执行时间
(define (time-it thunk)
  (let* ((start (current-jiffy))
         (result (thunk))
         (end (current-jiffy))
         (elapsed (/ (- end start) (jiffies-per-second))))
    (display "Elapsed time: ")
    (display elapsed)
    (display " seconds")
    (newline)
    result))

;; 使用
(time-it (lambda ()
           (let loop ((i 0))
             (when (< i 1000000)
               (loop (+ i 1))))))
```
