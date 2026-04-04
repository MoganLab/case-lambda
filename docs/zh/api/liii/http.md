# (liii http)

HTTP 客户端库。

## 导入

```scheme
(import (liii http))
```

## HTTP 请求

### `http-get`

发送 GET 请求。

```scheme
(http-get "https://api.example.com/data")
;; => 响应内容字符串

(http-get "https://api.example.com/data"
          #:headers '(("Accept" . "application/json")))
```

### `http-post`

发送 POST 请求。

```scheme
(http-post "https://api.example.com/submit"
           #:data '{"key": "value"}')

(http-post "https://api.example.com/submit"
           #:data '{"key": "value"}'
           #:headers '(("Content-Type" . "application/json")))
```

### `http-head`

发送 HEAD 请求。

```scheme
(http-head "https://example.com")
;; => 响应头信息
```

### `http-put`

发送 PUT 请求。

```scheme
(http-put "https://api.example.com/resource"
          #:data '{"updated": true}')
```

### `http-delete`

发送 DELETE 请求。

```scheme
(http-delete "https://api.example.com/resource/123")
```

## 响应处理

HTTP 响应通常以字符串形式返回，可以结合 `(liii json)` 解析 JSON 响应。

```scheme
(import (liii http)
        (liii json)
        (liii base))

;; GET JSON 并解析
(define response (http-get "https://api.example.com/data.json"))
(define data (string->json response))

;; 访问解析后的数据
(json-ref data "name")
```

## 完整示例

```scheme
(import (liii http)
        (liii json)
        (liii base)
        (liii error))

(define (fetch-user id)
  (let ((url (string-append "https://api.example.com/users/" id)))
    (condition-case
     (let* ((response (http-get url))
            (data (string->json response)))
       (if (json-ref data "error")
           (value-error "API error: ~a" (json-ref data "error"))
           data))
     (ex (else (os-error "Failed to fetch user: ~a" ex))))))
```
