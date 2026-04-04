# (liii base)

基础例程库，扩展了 R7RS `(scheme base)`。

## 导入

```scheme
(import (liii base))
```

## 函数

### 比较操作

#### `==`

数值相等比较。

```scheme
(== 1 1)     ; => #t
(== 1 1.0)   ; => #t
```

#### `!=`

数值不等比较。

```scheme
(!= 1 2)     ; => #t
(!= 1 1)     ; => #f
```

### 函数操作

#### `compose`

函数组合。

```scheme
((compose square add1) 5)   ; => 36
```

#### `identity`

恒等函数。

```scheme
(identity 42)   ; => 42
```

#### `any?`

总是返回 `#t` 的谓词。

```scheme
(any? 'foo)     ; => #t
(any? 123)      ; => #t
```

### 列表操作

#### `loose-car`

安全的 `car`，空列表返回空列表。

```scheme
(loose-car '(1 2 3))   ; => 1
(loose-car '())        ; => ()
```

#### `loose-cdr`

安全的 `cdr`，空列表返回空列表。

```scheme
(loose-cdr '(1 2 3))   ; => (2 3)
(loose-cdr '())        ; ()
```

### 宏

#### `typed-lambda`

带类型检查的 lambda。

```scheme
((typed-lambda ((n integer?))
   (* n n)) 5)           ; => 25

((typed-lambda ((n integer?))
   (* n n)) "foo")       ; => error: type-error
```

## R7RS 基础

同时导出 R7RS `(scheme base)` 的所有绑定：

- 定义: `define`, `lambda`, `case`, `cond`, `if`
- 数值: `+`, `-`, `*`, `/`, `abs`, `square`, `max`, `min`
- 列表: `cons`, `car`, `cdr`, `list`, `map`, `append`
- 等等...
