# 快速开始

Goldfish
Scheme 是一个 R7RS-small 兼容的 Scheme 解释器，提供了类似 Python 的丰富标准库。

## 安装

### macOS

使用 Homebrew 安装：

```bash
brew tap MoganLab/goldfish
brew install goldfish
```

### 从源码构建

```bash
git clone https://github.com/MoganLab/goldfish.git
cd goldfish
xmake build
```

更多安装选项请参考 [安装指南](./installation.md)。

## 第一个程序

创建一个 `hello.scm` 文件：

```scheme
(import (liii base))

(display "Hello, Goldfish Scheme!")
(newline)
```

运行：

```bash
gf hello.scm
```

## REPL 交互式环境

启动 REPL：

```bash
gf repl
```

尝试一些表达式：

```scheme
> (+ 1 2 3)
6

> (import (liii list))
> (iota 5)
(0 1 2 3 4)

> (import (liii string))
> (string-join '("hello" "world"))
"hello world"
```

## 使用标准库

Goldfish Scheme 提供了丰富的标准库：

```scheme
(import (liii os))
(getenv "HOME")

(import (liii path))
(path-dir? "/tmp")

(import (liii json))
(string->json '{"name": "goldfish", "version": "17.11"}')
```

## 下一步

- 了解 [命令行用法](./cli.md)
- 探索 [API 文档](/api/liii/)
- 查看 [Mogan Research](https://mogan.app) 获取图形化 REPL
