import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Goldfish Scheme',
  description: '让 Scheme 和 Python 一样易用且实用',

  // 构建输出目录 (docs/dist/)
  outDir: './dist',

  // 基础配置 (GitHub Pages 项目站点需要设置子路径)
  base: '/case-lambda/',

  // 清理 URL
  cleanUrls: true,
})
