# 模式选择

Goldfish Scheme 提供多种模式来适应不同的使用场景。

## 模式说明

| 模式      | 自动导入                                       | 用途                    |
| --------- | ---------------------------------------------- | ----------------------- |
| `default` | `(scheme base)`                                | 默认模式，等同于 `r7rs` |
| `r7rs`    | `(scheme base)`                                | 标准 R7RS               |
| `liii`    | `(liii base)`, `(liii error)`, `(liii string)` | Goldfish 完整体验       |
| `scheme`  | `(liii base)`, `(liii error)`                  | 轻量 Goldfish           |
| `sicp`    | `(scheme base)`, `(srfi sicp)`                 | SICP 学习               |
| `s7`      | 无                                             | 纯 S7 Scheme            |

## 使用模式

### 命令行指定

```bash
# 使用 liii 模式
gf -m liii repl

# 使用 s7 模式
gf -m s7 eval "(+ 1 2)"
```

### 推荐模式

- **日常开发**: `liii` - 获得所有 Goldfish 扩展
- **学习 Scheme**: `r7rs` 或 `sicp` - 标准体验
- **兼容性**: `s7` - 纯 S7 Scheme
- **快速脚本**: `scheme` - 轻量但实用

## 模式示例

### liii 模式

```bash
$ gf -m liii repl
> (string-join '("a" "b"))
"a b"
> (getenv "HOME")
"/Users/xxx"
```

### r7rs 模式

```bash
$ gf -m r7rs repl
> (define x 10)
> (if (> x 5) 'big 'small)
big
```

### sicp 模式

```bash
$ gf -m sicp repl
> (define (factorial n)
    (if (= n 0)
        1
        (* n (factorial (- n 1)))))
> (factorial 5)
120
```

## 模式对比

```scheme
; liii 模式可用
(string-join '("hello" "world"))  ; => "hello world"
(os-error "message")              ; 抛出 os-error

; r7rs 模式需要手动导入
(import (srfi srfi-13))
(string-join '("hello" "world"))

; s7 模式最精简
; 没有 define-library，使用纯 S7 语法
```
