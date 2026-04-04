# REPL 使用

REPL（Read-Eval-Print Loop）是交互式编程环境，可以即时执行 Scheme 代码。

## 启动 REPL

```bash
gf repl
```

或简写：

```bash
gf
```

## 基本使用

```scheme
> (+ 1 2)
3

> (define x 10)
> (* x x)
100

> (define (square n) (* n n))
> (square 5)
25
```

## 导入库

```scheme
> (import (liii list))
> (iota 5)
(0 1 2 3 4)

> (import (liii string))
> (string-join '("hello" "world"))
"hello world"
```

## Mogan Research 中的结构化 REPL

Mogan Research 提供了增强的 REPL 体验：

- 语法高亮
- 代码补全
- 错误提示
- 结构化输出

启动方式：`插件 → Goldfish`

## 有用的技巧

### 查看变量值

```scheme
> (define foo 'bar)
> foo
bar
```

### 多行输入

REPL 自动检测不完整的表达式并等待更多输入：

```scheme
> (define (factorial n)
    (if (= n 0)
        1
        (* n (factorial (- n 1)))))
> (factorial 5)
120
```

### 退出 REPL

使用 `(exit)` 或按 `Ctrl+D`：

```scheme
> (exit)
```
