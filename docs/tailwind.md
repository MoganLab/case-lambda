# Tailwind CSS 使用示例

## 基础样式

```markdown
<div class="bg-blue-500 text-white p-4 rounded-lg">
  蓝色背景 + 白色文字 + 圆角
</div>
```

<div class="bg-blue-500 text-white p-4 rounded-lg">
  蓝色背景 + 白色文字 + 圆角
</div>

## 响应式布局

```markdown
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 p-4 rounded">卡片 1</div>
  <div class="bg-gray-100 p-4 rounded">卡片 2</div>
  <div class="bg-gray-100 p-4 rounded">卡片 3</div>
</div>
```

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">卡片 1</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">卡片 2</div>
  <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">卡片 3</div>
</div>

## 暗黑模式

使用 `dark:` 前缀：

```markdown
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  自动适配浅色/深色模式
</div>
```

<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded">
  自动适配浅色/深色模式
</div>

## 交互状态

```markdown
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  点击我
</button>
```

<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
  点击我
</button>

## 提示框

```markdown
<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">提示</p>
  <p class="text-yellow-700 dark:text-yellow-300">这是一个提示信息。</p>
</div>
```

<div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
  <p class="font-bold text-yellow-800 dark:text-yellow-200">提示</p>
  <p class="text-yellow-700 dark:text-yellow-300">这是一个提示信息。</p>
</div>

## 徽章

```markdown
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
  New
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  Beta
</span>
```

<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
  New
</span>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  Beta
</span>

## 常用组合

| 效果 | 类名 |
|------|------|
| 居中容器 | `max-w-4xl mx-auto px-4` |
| Flex 居中 | `flex items-center justify-center` |
| 卡片样式 | `bg-white shadow rounded-lg p-6` |
| 文字渐变 | `bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500` |
