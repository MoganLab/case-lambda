# SRFI-216: SICP 支持

SRFI-216 提供了 SICP（计算机程序的构造和解释）所需的特性。

## 导入

```scheme
(import (srfi srfi-216))
```

## 用途

这个库主要用于支持 SICP 课程的学习，提供了一些在 SICP 中使用的特殊形式和过程。

## 特性

### 特殊形式

- `amb` - 不确定性计算
- `require` - 约束条件

### 示例

```scheme
(import (srfi srfi-216))

;; 不确定性选择
(define (an-element-of lst)
  (if (null? lst)
      (amb)
      (amb (car lst) (an-element-of (cdr lst)))))

;; 使用
(an-element-of '(1 2 3 4 5))
;; => 可能返回 1, 2, 3, 4, 或 5
```

## 与 sicp 模式

Goldfish Scheme 提供了 `sicp` 模式，自动导入 SICP 支持：

```bash
gf -m sicp repl
```

## 更多信息

关于 SICP 的更多内容：

- [SICP 中文版](https://sarabander.github.io/sicp/)
- [MIT 6.001 课程](https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/)
