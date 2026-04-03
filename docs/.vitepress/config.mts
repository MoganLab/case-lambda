import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Goldfish Scheme',
  description: '让 Scheme 和 Python 一样易用且实用',
  
  // 构建输出目录 (项目根目录的 dist/)
  outDir: './dist',
  
  // 基础配置
  base: '/',
  
  // 清理 URL
  cleanUrls: true,
  
  // 最后更新时间
  lastUpdated: true,
})
