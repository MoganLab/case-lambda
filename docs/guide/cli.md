# 命令行用法

Goldfish Scheme 使用子命令来执行不同操作。

## 基本用法

```bash
gf [子命令] [选项] [参数]
```

不带参数运行会显示帮助信息：

```bash
$ gf
Goldfish Scheme 17.11.38 by LiiiLabs

Commands:
  help               Display this help message
  version            Display version
  eval CODE          Evaluate Scheme code
  load FILE          Load Scheme code from FILE, then enter REPL
  repl               Enter interactive REPL mode
  run TARGET         Run main function from target
  test               Run tests
  fix PATH           Format Scheme code
  FILE               Load and evaluate Scheme file directly
```

## 子命令

### version

显示版本信息：

```bash
$ gf version
Goldfish Scheme 17.11.38 by LiiiLabs
based on S7 Scheme 11.5 (22-Sep-2025)
```

### eval

直接执行 Scheme 代码：

```bash
# 简单表达式
$ gf eval "(+ 1 2)"
3

# 导入库后执行
$ gf eval "(begin (import (srfi srfi-1)) (first (list 1 2 3)))"
1

# 访问命令行参数
$ gf eval "(begin (import (liii sys)) (display (argv)))" 1 2 3
("bin/gf" "eval" "..." "1" "2" "3")
```

### load

加载文件并进入 REPL：

```bash
gf load tests/goldfish/liii/base-test.scm
```

### repl

启动交互式 REPL：

```bash
gf repl
```

### run

运行指定目标：

```bash
gf run myprogram.scm
```

### test

运行测试：

```bash
gf test
```

### fix

格式化 Scheme 代码：

```bash
gf fix myprogram.scm
```

## 模式选项

使用 `-m` 或 `--mode` 指定标准库模式：

| 模式      | 描述                                                             |
| --------- | ---------------------------------------------------------------- |
| `default` | 等同于 `r7rs`                                                    |
| `liii`    | Goldfish Scheme + `(liii base)`, `(liii error)`, `(liii string)` |
| `scheme`  | Goldfish Scheme + `(liii base)` 和 `(liii error)`                |
| `sicp`    | S7 Scheme + `(scheme base)` 和 `(srfi sicp)`                     |
| `r7rs`    | S7 Scheme + `(scheme base)`                                      |
| `s7`      | 纯 S7 Scheme                                                     |

示例：

```bash
gf -m liii eval "(string-join '(a b))"
```

## 库搜索路径

添加额外的库搜索目录：

```bash
# 前置目录
gf -I ~/.local/goldfish/mylibs eval "(import (mylib))"

# 追加目录
gf -A /opt/goldfish/libs eval "(import (extralib))"
```

Goldfish 会自动加载 `~/.local/goldfish/` 下符合 `xxx-yyy` 格式且包含 `.scm`
文件的目录。

## 直接运行文件

```bash
gf myprogram.scm
```

等同于先 `load` 再执行文件。
