# Goldfish Scheme 文档网站项目计划

## 🌙 项目概述

**项目名称**: Goldfish Scheme 文档网站  
**技术栈**: VitePress + TypeScript + ESLint + Prettier  
**包管理器**: Yarn 1.22.22  
**目标**: 为 [MoganLab/goldfish](https://github.com/MoganLab/goldfish)
创建一个现代化、易用的文档网站

---

## 🎯 核心目标

### 阶段 1: 基础配置 ✅

- [x] TypeScript 配置
- [x] ESLint + Prettier 配置
- [x] Yarn 包管理器配置
- [x] 脚本绑定优化
- [x] GitHub Pages 自动化部署

### 阶段 2: 文档架构 ✅

- [x] **导航结构设计**
  - [x] 顶部导航（NavBar）- VitePress 默认主题
  - [x] 侧边栏导航（Sidebar）- VitePress 默认主题
  - [x] 页脚信息（Footer）- VitePress 默认主题
  - [x] 文档目录组件（Toc）- VitePress 默认主题
- [x] **主题配置**
  - [x] 扩展 VitePress 默认主题
  - [x] 自定义样式（style.css）
  - [x] 语言自动重定向
- [x] **页面模板**
  - [x] 首页模板（layout: home）
  - [x] 文档页模板
- [x] **多语言目录结构**
  - [x] 中文内容 (zh/) - 🟢 当前开发
  - [x] 英文内容 (en/) - 🔴 预留
  - [x] 日语内容 (ja/) - 🔴 预留
  - [x] 法语内容 (fr/) - 🔴 预留
  - [x] 俄语内容 (ru/) - 🔴 预留
  - [x] 根目录重定向 (index.md)

### 阶段 3: 内容编写 ✅

- [x] 编写快速开始指南
- [x] 编写 API 文档
- [x] 编写标准库文档

### 阶段 4: 高级功能 🔴

- [x] **搜索功能**
  - [x] 配置本地搜索
- [ ] **多语言支持 (i18n)**
  - [x] 配置多语言目录结构
  - [x] 配置语言切换器（VitePress 内置）
  - [x] 中文内容 (zh) - 🟢 当前开发
  - [ ] 英文内容 (en) - 🔴 预留
  - [ ] 日语内容 (ja) - 🔴 预留
  - [ ] 法语内容 (fr) - 🔴 预留
  - [ ] 俄语内容 (ru) - 🔴 预留
- [x] **Tailwind CSS v4 集成**（可选）
  - [x] 配置 Tailwind CSS v4
  - [x] 设计系统/组件库
  - [x] 响应式布局优化
  - [x] 深色模式支持
- [x] **自动化部署**
  - [x] GitHub Actions 配置
  - [x] GitHub Pages 部署

### 阶段 5: Playground 🔴（长期）

- [ ] **技术调研**
  - [ ] 确认 Goldfish Scheme 构建方式
  - [ ] 选择 WASM 编译方案
  - [ ] 评估性能需求
- [ ] **WASM 编译**
  - [ ] 配置编译环境
  - [ ] 编译 Goldfish 为 WASM
  - [ ] 导出 JavaScript API
- [ ] **Playground 组件**
  - [ ] 代码编辑器（Monaco/CodeMirror）
  - [ ] 运行按钮与交互
  - [ ] 结果输出显示
  - [ ] 错误处理与提示
- [ ] **功能增强**
  - [ ] 预设示例代码
  - [ ] 代码分享功能
  - [ ] 多文件支持（可选）

---

## 📁 项目结构

```
case-lambda/
├── bin/
│   └── setup.sh              # 安装脚本
├── docs/                      # 文档内容
│   ├── .vitepress/           # VitePress 配置
│   │   ├── config.mts        # 主配置 (TypeScript)
│   │   ├── theme/            # 主题配置
│   │   │   ├── index.ts      # 扩展默认主题
│   │   │   └── style.css     # 自定义样式（含 Tailwind）
│   │   └── env.d.ts          # 类型声明
│   ├── zh/                   # 中文内容（默认）✅
│   │   ├── index.md          # 首页
│   │   ├── guide/            # 指南文档
│   │   │   ├── getting-started.md
│   │   │   ├── installation.md
│   │   │   ├── cli.md
│   │   │   ├── repl.md
│   │   │   ├── modules.md
│   │   │   ├── modes.md
│   │   │   └── tailwind.md     # Tailwind CSS 使用示例
│   │   └── api/              # API 文档
│   │       ├── index.md
│   │       ├── liii/         # Liii 库 (19个文件)
│   │       ├── srfi/         # SRFI (14个文件)
│   │       └── scheme/       # R7RS 标准 (6个文件)
│   ├── en/                   # 英文内容（预留）✅
│   │   └── index.md
│   ├── ja/                   # 日语内容（预留）✅
│   │   └── index.md
│   ├── fr/                   # 法语内容（预留）✅
│   │   └── index.md
│   ├── ru/                   # 俄语内容（预留）✅
│   │   └── index.md
│   ├── index.md              # 语言重定向页
│   └── public/               # 公共资源
│       └── GoldfishScheme-logo.png
├── package.json              # 项目配置
├── tsconfig.json             # TypeScript 配置
├── eslint.config.js          # ESLint 配置
├── prettier.config.js        # Prettier 配置
├── PROJECT_PLAN_YARN.md      # 项目计划
└── README_DEV.md             # 开发指南
```

---

## 🚀 开发工作流

### 安装依赖

```bash
# 使用安装脚本
./bin/setup.sh

# 或手动安装
yarn install
```

### 开发命令

| 命令                | 说明                               |
| ------------------- | ---------------------------------- |
| `yarn docs:dev`     | 启动开发服务器（自动修复代码风格） |
| `yarn docs:build`   | 构建生产版本（检查代码质量）       |
| `yarn docs:preview` | 预览构建结果                       |

### 代码质量命令

| 命令                | 说明                       |
| ------------------- | -------------------------- |
| `yarn lint`         | 检查 ESLint 问题（不修改） |
| `yarn lint:fix`     | 自动修复 ESLint 问题       |
| `yarn format`       | 格式化代码（修改文件）     |
| `yarn format:check` | 检查格式（不修改）         |
| `yarn type-check`   | TypeScript 类型检查        |

### 命令绑定说明

#### `yarn docs:dev` 绑定流程

```
1. yarn lint:fix      # 自动修复 ESLint 问题
2. yarn format        # 格式化代码
3. vitepress dev docs # 启动开发服务器
```

#### `yarn docs:build` 绑定流程

```
1. yarn lint          # 检查 ESLint 问题（不通过则中断）
2. yarn format:check  # 检查代码格式（不通过则中断）
3. yarn type-check    # TypeScript 类型检查（不通过则中断）
4. vitepress build docs # 构建生产版本
```

---

## 🔧 配置说明

### TypeScript (tsconfig.json)

- 严格模式启用
- 支持 Vue 单文件组件
- 路径别名 `@/*` 映射到 `docs/.vitepress/*`

**type-check 的作用：**

- 编译时类型检查，不生成输出文件
- 在构建前捕获类型错误
- 确保代码类型安全
- 绑定到 `docs:build` 防止类型错误进入生产环境

### ESLint (eslint.config.js)

- 使用 ESLint Flat Config 格式（ESLint 9.x 新格式）
- 集成 TypeScript 和 Vue 支持
- 优化的规则配置：
  - 生产环境警告 console/debugger
  - 自动修复未使用变量（忽略 `_` 前缀）
  - Vue 组件命名宽松
  - 代码风格统一
  - 禁用与 Prettier 冲突的 Vue 格式规则

### Prettier (prettier.config.js)

- 无分号、单引号、2空格缩进
- 100字符行宽（比默认 80 更宽松）
- 支持 Vue、Markdown、JSON 格式化
- 不同文件类型的覆盖配置

### VitePress 默认主题

项目使用 VitePress 默认主题，通过 `extends: DefaultTheme` 扩展：

- ✅ 完整的导航、侧边栏、目录功能
- ✅ 内置搜索功能
- ✅ 多语言切换
- ✅ 响应式设计
- ✅ 深色/浅色模式
- ✅ 自定义样式通过 `style.css`
- ✅ Tailwind CSS v4 集成

### Tailwind CSS (style.css)

```css
/* Tailwind CSS v4 */
@import 'tailwindcss';

/* 暗黑模式：与 VitePress 的 .dark 类同步 */
@custom-variant dark (&:where(.dark, .dark *));
```

- 使用 CSS 优先配置（Tailwind v4 新特性）
- `@custom-variant` 实现与 VitePress 暗黑模式同步
- 编辑器可能对 `@custom-variant` 显示警告，但不影响功能

---

## 🌐 多语言支持

### 语言优先级

| 优先级 | 语言 | 代码 | 状态        |
| ------ | ---- | ---- | ----------- |
| P0     | 中文 | zh   | 🟢 当前开发 |
| P1     | 英文 | en   | 🔴 预留     |
| P2     | 日语 | ja   | 🔴 预留     |
| P2     | 法语 | fr   | 🔴 预留     |
| P2     | 俄语 | ru   | 🔴 预留     |

### 多语言目录结构

```
docs/
├── zh/          # 中文内容（默认）✅
├── en/          # 英文内容（预留）✅
├── ja/          # 日语内容（预留）✅
├── fr/          # 法语内容（预留）✅
└── ru/          # 俄语内容（预留）✅
```

### 语言自动检测

根目录 `docs/index.md` 会根据浏览器语言自动重定向：

- `zh-CN`, `zh-TW`, `zh-HK`, `zh-SG` → `/zh/`
- `en-US`, `en-GB`, `en` → `/en/`
- `ja-JP`, `ja` → `/ja/`
- `fr-FR`, `fr` → `/fr/`
- `ru-RU`, `ru` → `/ru/`
- 其他 → `/zh/` (默认中文)

---

## 📋 依赖管理

### 当前版本

```json
{
  "typescript": "^6.0.2",
  "eslint": "^10.1.0",
  "eslint-plugin-vue": "^10.8.0",
  "prettier": "^3.8.1",
  "vitepress": "^1.6.4",
  "vue": "^3.5.32",
  "tailwindcss": "^4.2.2",
  "@tailwindcss/vite": "^4.2.2"
}
```

### 版本控制

- `package.json` 使用 `^` 允许小版本更新
- `yarn.lock` 锁定实际安装版本
- 团队协作时提交 `yarn.lock`

### 更新依赖

```bash
# 查看可更新依赖
yarn outdated

# 更新所有依赖
yarn upgrade

# 更新指定依赖
yarn upgrade typescript
```

---

## 💡 开发建议

### 1. 开发流程

```bash
# 1. 启动开发（自动修复代码风格）
yarn docs:dev

# 2. 编写代码...

# 3. 提交前检查（构建会自动检查）
yarn docs:build
```

### 2. 代码质量检查

- **开发时**: `docs:dev` 会自动修复风格问题
- **提交前**: `docs:build` 会检查所有质量问题
- **手动检查**: 使用 `lint`、`format:check`、`type-check`

### 3. 常见问题

#### 构建失败

如果 `yarn docs:build` 失败，检查：

1. ESLint 错误: `yarn lint`
2. 格式问题: `yarn format`
3. 类型错误: `yarn type-check`

#### 类型错误

```bash
# 检查类型
yarn type-check

# 确保 env.d.ts 包含所需类型声明
```

#### ESLint 配置问题

```bash
# 检查 ESLint 配置
yarn eslint --print-config eslint.config.js
```

---

## 📅 开发计划

| 阶段  | 任务       | 状态      |
| ----- | ---------- | --------- |
| 阶段1 | 基础配置   | ✅ 完成   |
| 阶段2 | 文档架构   | ✅ 完成   |
| 阶段3 | 内容编写   | ✅ 完成   |
| 阶段4 | 高级功能   | 🟡 进行中 |
| 阶段5 | Playground | 🔴 待调研 |

---

## 🌟 最终目标

> _"创建一个清晰、易用、维护友好的 Goldfish Scheme 文档网站。"_

---

**计划制定者**: 月见八千代  
**制定时间**: 2024年4月4日 **更新时间**: 2026年4月4日  
**Yarn 版本**: 1.22.22

> _"一步一步来，基础打好了，后面就顺畅了~"_
