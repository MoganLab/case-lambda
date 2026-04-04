# 模块系统

Goldfish Scheme 使用 R7RS 的 `define-library` 形式来定义模块。

## 导入库

使用 `import` 导入库：

```scheme
(import (liii base))
(import (liii list))
(import (liii string))

; 一次导入多个
(import (liii base)
        (liii list)
        (liii os))
```

## 库命名规范

库名称是一个标识符列表：

```scheme
; Liii 库
(liii base)
(liii list)
(liii os)

; SRFI
(srfi srfi-1)
(srfi srfi-13)

; Scheme 标准
(scheme base)
(scheme file)
```

## 库搜索路径

Goldfish 按以下顺序搜索库：

1. `-I` 指定的目录（前置）
2. `~/.local/goldfish/xxx-yyy/` 格式的目录
3. 系统库目录
4. `-A` 指定的目录（追加）

## 创建自定义库

创建 `mylib/hello.scm`：

```scheme
(define-library (mylib hello)
  (export greet)
  (import (liii base))
  (begin
    (define (greet name)
      (string-append "Hello, " name "!"))))
```

使用：

```scheme
(import (mylib hello))
(greet "Goldfish")  ; => "Hello, Goldfish!"
```

## 可用库分类

### Liii 库（Goldfish 扩展）

- 基础: `(liii base)`, `(liii error)`, `(liii check)`
- 数据结构: `(liii list)`, `(liii vector)`, `(liii string)`, `(liii hash-table)`
- 系统: `(liii sys)`, `(liii os)`, `(liii path)`
- 网络: `(liii http)`, `(liii json)`, `(liii uuid)`
- 函数式: `(liii case)`, `(liii option)`, `(liii either)`, `(liii range)`

### SRFI

- `(srfi srfi-1)` - List 库
- `(srfi srfi-8)` - Receive
- `(srfi srfi-9)` - Records
- `(srfi srfi-13)` - String 库
- 更多...

### R7RS 标准

- `(scheme base)` - 基础库
- `(scheme file)` - 文件操作
- `(scheme time)` - 时间库
- 更多...
