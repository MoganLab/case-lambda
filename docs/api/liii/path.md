# (liii path)

路径操作库，类似 Python 的 os.path 模块。

## 导入

```scheme
(import (liii path))
```

## 路径查询

### `path-exists?`

检查路径是否存在。

```scheme
(path-exists? "/tmp")
;; => #t

(path-exists? "/nonexistent")
;; => #f
```

### `path-file?`

检查是否为文件。

```scheme
(path-file? "/tmp/file.txt")
;; => #t

(path-file? "/tmp")
;; => #f
```

### `path-dir?`

检查是否为目录。

```scheme
(path-dir? "/tmp")
;; => #t

(path-dir? "/tmp/file.txt")
;; => #f
```

### `path-absolute?`

检查是否为绝对路径。

```scheme
(path-absolute? "/tmp/file.txt")
;; => #t

(path-absolute? "relative/path")
;; => #f
```

## 路径操作

### `path-join`

连接路径。

```scheme
(path-join "/tmp" "subdir" "file.txt")
;; => "/tmp/subdir/file.txt"
```

### `path-dirname`

获取目录名。

```scheme
(path-dirname "/tmp/subdir/file.txt")
;; => "/tmp/subdir"
```

### `path-basename`

获取文件名。

```scheme
(path-basename "/tmp/subdir/file.txt")
;; => "file.txt"

(path-basename "/tmp/subdir/file.txt" ".txt")
;; => "file"
```

### `path-extension`

获取扩展名。

```scheme
(path-extension "/tmp/file.txt")
;; => ".txt"

(path-extension "/tmp/file.tar.gz")
;; => ".gz"
```

### `path-without-extension`

获取不带扩展名的路径。

```scheme
(path-without-extension "/tmp/file.txt")
;; => "/tmp/file"
```

### `path-normalize`

规范化路径。

```scheme
(path-normalize "/tmp/../etc/./file.txt")
;; => "/etc/file.txt"
```

## 示例

```scheme
(import (liii path)
        (liii base))

;; 检查并读取文件
(define (safe-read-file path)
  (if (and (path-exists? path) (path-file? path))
      (call-with-input-file path read)
      #f))

;; 创建完整路径
(define (ensure-path dir file)
  (path-join (path-normalize dir) file))
```
