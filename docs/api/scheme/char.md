# (scheme char)

字符操作库。

## 导入

```scheme
(import (scheme char))
```

## 谓词

| 函数               | 描述           | 示例                                 |
| ------------------ | -------------- | ------------------------------------ |
| `char-alphabetic?` | 字母           | `(char-alphabetic? #\a)` => `#t`     |
| `char-numeric?`    | 数字           | `(char-numeric? #\5)` => `#t`        |
| `char-whitespace?` | 空白           | `(char-whitespace? #\space)` => `#t` |
| `char-upper-case?` | 大写           | `(char-upper-case? #\A)` => `#t`     |
| `char-lower-case?` | 小写           | `(char-lower-case? #\a)` => `#t`     |
| `char=?`           | 相等           | `(char=? #\a #\a)` => `#t`           |
| `char<?`           | 小于           | `(char<? #\a #\b)` => `#t`           |
| `char-ci=?`        | 忽略大小写相等 | `(char-ci=? #\a #\A)` => `#t`        |
| `char-ci<?`        | 忽略大小写小于 | `(char-ci<? #\a #\B)` => `#t`        |

## 转换

| 函数            | 描述       | 示例                           |
| --------------- | ---------- | ------------------------------ |
| `char-upcase`   | 转大写     | `(char-upcase #\a)` => `#\A`   |
| `char-downcase` | 转小写     | `(char-downcase #\A)` => `#\a` |
| `char-foldcase` | 大小写折叠 | `(char-foldcase #\A)` => `#\a` |

## 其他

| 函数            | 描述       | 示例                          |
| --------------- | ---------- | ----------------------------- |
| `digit-value`   | 数字值     | `(digit-value #\5)` => `5`    |
| `char->integer` | 转整数     | `(char->integer #\A)` => `65` |
| `integer->char` | 从整数创建 | `(integer->char 65)` => `#\A` |
