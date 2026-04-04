# SRFI

SRFI (Scheme Request for Implementation) 是 Scheme 社区的标准库提案。

Goldfish Scheme 实现了以下 SRFI：

## 完整实现

| SRFI     | 描述                      | 文档                             |
| -------- | ------------------------- | -------------------------------- |
| SRFI-8   | Receive: 绑定多个返回值   | [(srfi srfi-8)](./srfi-8.md)     |
| SRFI-9   | Records: 定义记录类型     | [(srfi srfi-9)](./srfi-9.md)     |
| SRFI-16  | Case-lambda: 可变参数函数 | [(srfi srfi-16)](./srfi-16.md)   |
| SRFI-39  | 参数对象                  | [(srfi srfi-39)](./srfi-39.md)   |
| SRFI-196 | Range 范围库              | [(srfi srfi-196)](./srfi-196.md) |
| SRFI-216 | SICP 支持                 | [(srfi srfi-216)](./srfi-216.md) |

## 部分实现

| SRFI     | 描述           | 状态 | 文档                             |
| -------- | -------------- | ---- | -------------------------------- |
| SRFI-1   | List 库        | 部分 | [(srfi srfi-1)](./srfi-1.md)     |
| SRFI-13  | String 库      | 完整 | [(srfi srfi-13)](./srfi-13.md)   |
| SRFI-78  | 轻量级测试框架 | 部分 | [(srfi srfi-78)](./srfi-78.md)   |
| SRFI-125 | Hash Table     | 部分 | [(srfi srfi-125)](./srfi-125.md) |
| SRFI-133 | Vector 库      | 部分 | [(srfi srfi-133)](./srfi-133.md) |
| SRFI-151 | 位运算         | 部分 | [(srfi srfi-151)](./srfi-151.md) |

## 使用 SRFI

```scheme
(import (srfi srfi-1))   ; List 操作
(import (srfi srfi-13))  ; String 操作
(import (srfi srfi-16))  ; Case-lambda
```

## 更多信息

访问 [SRFI 官方网站](https://srfi.schemers.org/) 查看完整的规范。
