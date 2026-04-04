# (liii sys)

系统相关功能，类似 Python 的 sys 模块。

## 导入

```scheme
(import (liii sys))
```

## 命令行参数

### `argv`

获取命令行参数列表。

```scheme
(argv)
;; => ("bin/gf" "eval" "(+ 1 2)")
```

### `argc`

获取命令行参数数量。

```scheme
(argc)
;; => 3
```

## 程序控制

### `exit`

退出程序。

```scheme
(exit)        ;; 正常退出
(exit 0)      ;; 正常退出，返回码 0
(exit 1)      ;; 异常退出，返回码 1
```

## 示例

```scheme
(import (liii sys)
        (liii base))

;; 打印所有参数
(for-each (lambda (arg)
            (display arg)
            (newline))
          (argv))

;; 检查参数数量
(when (< (argc) 2)
  (display "Usage: program <input>")
  (newline)
  (exit 1))
```
