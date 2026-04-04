# 安装指南

## macOS

### 使用 Homebrew（推荐）

```bash
# 添加 tap
brew tap MoganLab/goldfish

# 安装 Goldfish Scheme
brew install goldfish

# 验证安装
gf version
```

### 卸载

```bash
brew uninstall goldfish
```

## 从源码构建

### 依赖

- C++ 编译器（支持 C++98）
- [xmake](https://xmake.io) 构建工具
- [tbox](https://gitee.com/tboox/tbox)
- [S7 Scheme](https://ccrma.stanford.edu/software/s7/)

### 构建步骤

```bash
# 克隆仓库
git clone https://github.com/MoganLab/goldfish.git
cd goldfish

# 构建
xmake build

# 运行测试
xmake test

# 安装（可选）
xmake install
```

## Mogan Research

Goldfish Scheme 从 v1.2.8 开始捆绑在 Mogan Research 中：

1. [下载 Mogan Research](https://mogan.app/guide/Install.html)
2. 安装后，使用 `插件 → Goldfish` 启动结构化 REPL

## 验证安装

```bash
# 查看版本
gf version

# 运行测试
gf test

# 进入 REPL
gf repl
```

## 下一步

现在你已经安装好了 Goldfish Scheme，可以：

- [快速开始](./getting-started.md) - 编写你的第一个程序
- [命令行用法](./cli.md) - 了解更多命令行选项
