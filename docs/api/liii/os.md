# (liii os)

操作系统功能，类似 Python 的 os 模块。

## 导入

```scheme
(import (liii os))
```

## 环境变量

### `getenv`

获取环境变量。

```scheme
(getenv "HOME")
;; => "/Users/username"

(getenv "PATH")
;; => "/usr/local/bin:/usr/bin:/bin"

(getenv "NONEXISTENT")
;; => #f (不存在时返回 #f)
```

### `setenv`

设置环境变量。

```scheme
(setenv "MY_VAR" "my_value")
```

## 文件系统

### `mkdir`

创建目录。

```scheme
(mkdir "newdir")           ;; 创建单个目录
(mkdir -p "a/b/c")         ;; 递归创建目录
```

### `rmdir`

删除目录。

```scheme
(rmdir "emptydir")
```

### `listdir`

列出目录内容。

```scheme
(listdir "/tmp")
;; => ("file1" "file2" "dir1")
```

### `remove`

删除文件。

```scheme
(remove "/tmp/tempfile.txt")
```

### `rename`

重命名文件或目录。

```scheme
(rename "oldname.txt" "newname.txt")
```

## 进程信息

### `getcwd`

获取当前工作目录。

```scheme
(getcwd)
;; => "/Users/username/project"
```

### `chdir`

切换工作目录。

```scheme
(chdir "/tmp")
```

### `system`

执行系统命令。

```scheme
(system "ls -la")
```

## 路径分隔符

### `path-separator`

获取路径分隔符。

```scheme
path-separator
;; => "/"  (Unix/Linux/macOS)
;; => "\\" (Windows)
```
