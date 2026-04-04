# (liii string)

字符串操作库。

## 导入

```scheme
(import (liii string))
```

## 主要函数

### `string-join`

将字符串列表连接成一个字符串。

```scheme
(string-join '("hello" "world"))
;; => "hello world"

(string-join '("a" "b" "c") ",")
;; => "a,b,c"
```

### `string-split`

将字符串分割成列表。

```scheme
(string-split "hello world")
;; => ("hello" "world")

(string-split "a,b,c" ",")
;; => ("a" "b" "c")
```

### `string-trim`

去除字符串两端空白。

```scheme
(string-trim "  hello  ")
;; => "hello"
```

### `string-prefix?` / `string-suffix?`

检查前缀/后缀。

```scheme
(string-prefix? "hello" "hello world")
;; => #t

(string-suffix? "world" "hello world")
;; => #t
```

### `string-contains?`

检查子字符串。

```scheme
(string-contains? "world" "hello world")
;; => #t
```

### `string-replace`

替换子字符串。

```scheme
(string-replace "hello world" "world" "scheme")
;; => "hello scheme"
```

## SRFI-13 函数

更多字符串函数请参见 [(srfi srfi-13)](../srfi/srfi-13.md)。
