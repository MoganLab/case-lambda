# Liii 库

Liii 库是 Goldfish Scheme 的核心扩展，提供类似 Python 的丰富功能。

## 基础库

| 库                         | 描述     | 主要功能                                      |
| -------------------------- | -------- | --------------------------------------------- |
| [(liii base)](./base.md)   | 基础例程 | `==`, `!=`, `display*`, `compose`, `identity` |
| [(liii error)](./error.md) | 错误处理 | `os-error`, `type-error`, `value-error`       |
| [(liii check)](./check.md) | 测试框架 | `check`, `check-catch`, `check-report`        |

## 数据结构

| 库                                   | 描述     | 主要功能                                    |
| ------------------------------------ | -------- | ------------------------------------------- |
| [(liii list)](./list.md)             | 列表库   | `list-view`, `fold`, `flatten`, `list-take` |
| [(liii vector)](./vector.md)         | 向量库   | `vector-index`, `vector-fold`               |
| [(liii string)](./string.md)         | 字符串库 | `string-join`, `string-split`               |
| [(liii hash-table)](./hash-table.md) | 哈希表库 | `hash-table-empty?`, `hash-table-contains?` |

## 系统与 IO

| 库                       | 描述     | 主要功能                               |
| ------------------------ | -------- | -------------------------------------- |
| [(liii sys)](./sys.md)   | 系统模块 | `argv`, `exit`                         |
| [(liii os)](./os.md)     | 操作系统 | `getenv`, `mkdir`, `listdir`           |
| [(liii path)](./path.md) | 路径操作 | `path-dir?`, `path-file?`, `path-join` |

## 网络与数据

| 库                       | 描述        | 主要功能                             |
| ------------------------ | ----------- | ------------------------------------ |
| [(liii http)](./http.md) | HTTP 客户端 | `http-get`, `http-post`, `http-head` |
| [(liii json)](./json.md) | JSON 处理   | `string->json`, `json->string`       |
| [(liii uuid)](./uuid.md) | UUID 生成   | `uuid4`                              |

## 函数式编程

| 库                           | 描述        | 主要功能                                  |
| ---------------------------- | ----------- | ----------------------------------------- |
| [(liii case)](./case.md)     | 模式匹配    | `case*`                                   |
| [(liii option)](./option.md) | Option 类型 | `option?`, `option-map`, `option-flatten` |
| [(liii either)](./either.md) | Either 类型 | `left?`, `right?`, `either-map`           |
| [(liii range)](./range.md)   | Range 库    | `numeric-range`, `iota`                   |

## 其他

| 库                             | 描述   | 主要功能                    |
| ------------------------------ | ------ | --------------------------- |
| [(liii bitwise)](./bitwise.md) | 位运算 | `bitwise-and`, `bitwise-or` |

## 使用示例

```scheme
(import (liii base)
        (liii list)
        (liii string)
        (liii os))

;; 组合使用
(string-join
  (map number->string
       (iota 5))
  ", ")
;; => "0, 1, 2, 3, 4"

;; 环境变量
(getenv "HOME")
```
