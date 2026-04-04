# (liii json)

JSON 解析和生成库。

## 导入

```scheme
(import (liii json))
```

## JSON 解析

### `string->json`

将 JSON 字符串解析为 Scheme 对象。

```scheme
(string->json '{"name": "goldfish", "version": "17.11"}')
;; => #<hash-table>

(string->json '[1, 2, 3, 4, 5]')
;; => #(1 2 3 4 5)

(string->json '"hello"')
;; => "hello"

(string->json '42')
;; => 42
```

## JSON 生成

### `json->string`

将 Scheme 对象转换为 JSON 字符串。

```scheme
(json->string '#(("name" . "goldfish") ("version" . "17.11")))
;; => '{"name":"goldfish","version":"17.11"}'

(json->string '#(1 2 3 4 5))
;; => '[1,2,3,4,5]'

(json->string "hello")
;; => '"hello"'
```

## JSON 操作

### `json-ref`

获取 JSON 对象的字段值。

```scheme
(define data (string->json '{"user": {"name": "Alice", "age": 30}}'))

(json-ref data "user")
;; => #<hash-table with name and age>

(json-ref data "user" "name")
;; => "Alice"

(json-ref data "nonexistent")
;; => #f

(json-ref data "nonexistent" #:default '())
;; => ()
```

### `json-set!`

设置 JSON 对象的字段值。

```scheme
(define data (string->json '{}'))

(json-set! data "name" "Bob")
(json-set! data "age" 25)

(json->string data)
;; => '{"name":"Bob","age":25}'
```

### `json-delete!`

删除 JSON 对象的字段。

```scheme
(json-delete! data "age")
```

## 完整示例

```scheme
(import (liii json)
        (liii base)
        (liii list))

;; 创建配置对象
(define config (alist->hash-table
                '((name . "myapp")
                  (version . "1.0.0")
                  (debug . #f))))

;; 添加嵌套配置
(hash-table-set! config "database"
  (alist->hash-table
   '((host . "localhost")
     (port . 5432))))

;; 转换为 JSON
(display (json->string config))
;; => '{"name":"myapp","version":"1.0.0","debug":false,"database":{"host":"localhost","port":5432}}'

;; 解析 JSON
(define parsed (string->json '{"x": 10, "y": 20}'))
(+ (json-ref parsed "x")
   (json-ref parsed "y"))
;; => 30
```
