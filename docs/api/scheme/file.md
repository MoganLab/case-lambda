# (scheme file)

文件操作库。

## 导入

```scheme
(import (scheme file))
```

## 端口操作

### 打开文件

| 函数                    | 描述         | 示例                                         |
| ----------------------- | ------------ | -------------------------------------------- |
| `call-with-input-file`  | 打开输入文件 | `(call-with-input-file "data.txt" read)`     |
| `call-with-output-file` | 打开输出文件 | `(call-with-output-file "out.txt" write-fn)` |
| `with-input-from-file`  | 重定向输入   | `(with-input-from-file "data.txt" thunk)`    |
| `with-output-to-file`   | 重定向输出   | `(with-output-to-file "out.txt" thunk)`      |

### 打开二进制文件

| 函数                      | 描述           | 示例                                  |
| ------------------------- | -------------- | ------------------------------------- |
| `open-binary-input-file`  | 打开二进制输入 | `(open-binary-input-file "data.bin")` |
| `open-binary-output-file` | 打开二进制输出 | `(open-binary-output-file "out.bin")` |

## 完整示例

```scheme
(import (scheme file)
        (scheme base))

;; 读取整个文件
(define (read-file filename)
  (call-with-input-file filename
    (lambda (port)
      (let loop ((result '()))
        (let ((line (read-line port)))
          (if (eof-object? line)
              (reverse result)
              (loop (cons line result))))))))

;; 写入文件
(define (write-file filename lines)
  (call-with-output-file filename
    (lambda (port)
      (for-each (lambda (line)
                  (display line port)
                  (newline port))
                lines))))

;; 复制文件
(define (copy-file from to)
  (call-with-input-file from
    (lambda (in)
      (call-with-output-file to
        (lambda (out)
          (let loop ((char (read-char in)))
            (unless (eof-object? char)
              (write-char char out)
              (loop (read-char in)))))))))
```
