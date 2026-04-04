# R7RS 标准库

Goldfish Scheme 兼容 R7RS-small 标准。

## 标准库

| 库                   | 描述        | 文档                                     |
| -------------------- | ----------- | ---------------------------------------- |
| (scheme base)        | 基础库      | [(scheme base)](./base.md)               |
| (scheme case-lambda) | Case-lambda | [(scheme case-lambda)](./case-lambda.md) |
| (scheme char)        | 字符库      | [(scheme char)](./char.md)               |
| (scheme file)        | 文件操作    | [(scheme file)](./file.md)               |
| (scheme time)        | 时间库      | [(scheme time)](./time.md)               |

## 使用标准库

```scheme
(import (scheme base))
(import (scheme file))
(import (scheme time))
```

## 更多信息

- [R7RS 小版本](https://small.r7rs.org/)
- [R7RS 规范](https://small.r7rs.org/attachment/r7rs.pdf)
