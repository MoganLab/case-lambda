<script setup lang="ts">
import { useData } from 'vitepress'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <div class="layout">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 主要内容区 -->
    <main class="main-content">
      <!-- 首页布局 -->
      <div v-if="frontmatter.home" class="home">
        <Content />
      </div>

      <!-- 文档页面布局 -->
      <div v-else class="page">
        <Content />
      </div>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* 首页样式 - 居中布局 */
.home {
  text-align: center;
}

.home :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home :deep(p) {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

/* 文档页面样式 - 左对齐 */
.page {
  text-align: left;
}

.page :deep(h1) {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.page :deep(h2) {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.page :deep(p) {
  line-height: 1.8;
  margin-bottom: 1rem;
}

.page :deep(pre) {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.page :deep(code) {
  font-family: 'JetBrains Mono', monospace;
  background: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.page :deep(pre code) {
  background: transparent;
  padding: 0;
}
</style>
