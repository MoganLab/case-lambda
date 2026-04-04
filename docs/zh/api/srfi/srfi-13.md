# SRFI-13: String 库

SRFI-13 提供了全面的字符串操作函数。

## 导入

```scheme
(import (srfi srfi-13))
; 或
(import (liii string))  ; Goldfish 扩展版本
```

## 构造函数

| 函数            | 描述       | 示例                                      |
| --------------- | ---------- | ----------------------------------------- |
| `string-join`   | 连接字符串 | `(string-join '("a" "b") ",")` => `"a,b"` |
| `string-append` | 追加字符串 | `(string-append "a" "b")` => `"ab"`       |
| `string-copy`   | 复制字符串 | `(string-copy "abc")` => `"abc"`          |

## 谓词

| 函数           | 描述         | 示例                                            |
| -------------- | ------------ | ----------------------------------------------- |
| `string?`      | 是否为字符串 | `(string? "abc")` => `#t`                       |
| `string-null?` | 是否为空     | `(string-null? "")` => `#t`                     |
| `string-every` | 所有字符满足 | `(string-every char-alphabetic? "abc")` => `#t` |
| `string-any`   | 任意字符满足 | `(string-any char-numeric? "a1b")` => `#t`      |

## 查找与比较

| 函数              | 描述           |
| ----------------- | -------------- |
| `string-prefix?`  | 前缀检查       |
| `string-suffix?`  | 后缀检查       |
| `string-contains` | 子串查找       |
| `string-index`    | 查找字符位置   |
| `string=?`        | 相等           |
| `string<?`        | 小于           |
| `string-ci=?`     | 忽略大小写相等 |

## 修改

| 函数              | 描述        | 示例                                 |
| ----------------- | ----------- | ------------------------------------ |
| `string-upcase`   | 转大写      | `(string-upcase "abc")` => `"ABC"`   |
| `string-downcase` | 转小写      | `(string-downcase "ABC")` => `"abc"` |
| `string-trim`     | 去除空白    | `(string-trim "  abc  ")` => `"abc"` |
| `string-pad`      | 填充        | `(string-pad "42" 5)` => `"   42"`   |
| `string-take`     | 取前 n 个   | `(string-take "abcde" 3)` => `"abc"` |
| `string-drop`     | 丢弃前 n 个 | `(string-drop "abcde" 3)` => `"de"`  |

## 更多函数

更多详细文档请参考 [(liii string)](../liii/string.md)。
