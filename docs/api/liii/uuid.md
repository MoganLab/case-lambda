# (liii uuid)

UUID 生成库。

## 导入

```scheme
(import (liii uuid))
```

## 函数

### `uuid4`

生成随机 UUID (版本 4)。

```scheme
(uuid4)
;; => "a8098c1a-f86e-11da-bd1a-00112444be1e"
```

## 完整示例

```scheme
(import (liii uuid)
        (liii base))

;; 生成唯一 ID
(define session-id (uuid4))
(display session-id)
(newline)
```
