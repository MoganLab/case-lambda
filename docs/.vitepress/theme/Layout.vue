<script setup lang="ts">
import { useData, Content } from 'vitepress'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import Toc from './components/Toc.vue'
import Hero from './components/Hero.vue'

const { frontmatter } = useData()

const isHome = frontmatter.value?.home === true
</script>

<template>
  <div class="layout">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 首页布局 -->
    <main v-if="isHome" class="home-layout">
      <Hero />
      <Content />
    </main>

    <!-- 文档页面布局 -->
    <div v-else class="doc-layout">
      <!-- 侧边栏 -->
      <Sidebar />

      <!-- 主内容区 -->
      <main class="main-content">
        <div class="content-wrapper">
          <Content />
        </div>
      </main>

      <!-- 目录 -->
      <Toc />
    </div>

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

/* 首页布局 */
.home-layout {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* 文档页面布局 */
.doc-layout {
  flex: 1;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.main-content {
  flex: 1;
  min-width: 0;
  padding: 2rem;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

/* 文档页面样式 - 左对齐 */
.content-wrapper :deep(h1) {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.content-wrapper :deep(h2) {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.content-wrapper :deep(h3) {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.content-wrapper :deep(p) {
  line-height: 1.8;
  margin-bottom: 1rem;
}

.content-wrapper :deep(pre) {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.content-wrapper :deep(code) {
  font-family: 'JetBrains Mono', monospace;
  background: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.content-wrapper :deep(pre code) {
  background: transparent;
  padding: 0;
}

.content-wrapper :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.content-wrapper :deep(th),
.content-wrapper :deep(td) {
  border: 1px solid #e5e7eb;
  padding: 0.5rem 0.75rem;
  text-align: left;
}

.content-wrapper :deep(th) {
  background: #f9fafb;
  font-weight: 600;
}

.content-wrapper :deep(ul),
.content-wrapper :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.content-wrapper :deep(li) {
  margin: 0.5rem 0;
}

.content-wrapper :deep(a) {
  color: #3b82f6;
  text-decoration: none;
}

.content-wrapper :deep(a:hover) {
  text-decoration: underline;
}

.content-wrapper :deep(blockquote) {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #4b5563;
}

/* 响应式布局 */
@media (max-width: 1024px) {
  .doc-layout {
    flex-direction: column;
  }

  .main-content {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .home-layout {
    padding: 1rem;
  }

  .main-content {
    padding: 1rem;
  }
}
</style>
