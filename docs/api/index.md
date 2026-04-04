# API 文档

Goldfish Scheme 提供了丰富的 API，分为三个主要部分：

## Liii 库

Goldfish Scheme 的扩展库，提供类似 Python 的实用功能。

- [基础库](./liii/) - `(liii base)`, `(liii error)`, `(liii check)`
- [数据结构](./liii/) - `(liii list)`, `(liii vector)`, `(liii string)`,
  `(liii hash-table)`
- [系统与 IO](./liii/) - `(liii sys)`, `(liii os)`, `(liii path)`
- [网络与数据](./liii/) - `(liii http)`, `(liii json)`, `(liii uuid)`
- [函数式编程](./liii/) - `(liii case)`, `(liii option)`, `(liii either)`,
  `(liii range)`

## SRFI

Scheme Request for Implementation 标准实现。

- [SRFI-1](./srfi/) - List 库
- [SRFI-8](./srfi/) - Receive
- [SRFI-9](./srfi/) - Records
- [SRFI-13](./srfi/) - String 库
- [SRFI-16](./srfi/) - Case-lambda
- [更多...](./srfi/)

## R7RS 标准

R7RS-small 标准库。

- [(scheme base)](./scheme/) - 基础库
- [(scheme case-lambda)](./scheme/) - Case-lambda
- [(scheme char)](./scheme/) - 字符库
- [(scheme file)](./scheme/) - 文件操作
- [(scheme time)](./scheme/) - 时间库
