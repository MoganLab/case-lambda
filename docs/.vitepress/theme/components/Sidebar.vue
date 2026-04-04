<script setup lang="ts">
import { useData } from 'vitepress'

const { page, theme } = useData()

// 获取当前路径
const currentPath = page.value.relativePath

// 检查链接是否激活
function isActive(link: string): boolean {
  if (!link) return false
  const cleanLink = link.replace(/\.md$/, '').replace(/\/$/, '')
  const cleanPath = currentPath.replace(/\.md$/, '').replace(/\/$/, '')
  return cleanPath === cleanLink || cleanPath.startsWith(cleanLink + '/')
}

// 侧边栏配置类型
interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

// 获取当前页面的侧边栏配置
function getSidebarConfig(): SidebarItem[] {
  const sidebar = theme.value.sidebar
  if (!sidebar) return []

  // 找到匹配的侧边栏配置
  for (const [path, config] of Object.entries(sidebar)) {
    const cleanPath = path.replace(/\/$/, '')
    if (currentPath.startsWith(cleanPath)) {
      return Array.isArray(config) ? config : []
    }
  }

  return []
}

const sidebarItems = getSidebarConfig()
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <div v-for="(section, index) in sidebarItems" :key="index" class="sidebar-section">
        <!-- 节标题 -->
        <h3 v-if="section.text" class="section-title">
          {{ section.text }}
        </h3>

        <!-- 节内链接 -->
        <ul v-if="section.items" class="section-items">
          <li v-for="item in section.items" :key="item.text" class="section-item">
            <a :href="item.link" class="item-link" :class="{ active: isActive(item.link || '') }">
              {{ item.text }}
            </a>
          </li>
        </ul>

        <!-- 直接链接（无子项） -->
        <a
          v-else-if="section.link"
          :href="section.link"
          class="item-link section-link"
          :class="{ active: isActive(section.link) }"
        >
          {{ section.text }}
        </a>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  flex-shrink: 0;
  padding: 1.5rem 0;
  border-right: 1px solid #e5e7eb;
  background: #fafafa;
  overflow-y: auto;
}

.sidebar-nav {
  padding: 0 1rem;
}

.sidebar-section {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem 0;
  padding: 0 0.75rem;
}

.section-items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.section-item {
  margin: 0.25rem 0;
}

.item-link {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: all 0.2s;
}

.item-link:hover {
  background: #f3f4f6;
  color: #3b82f6;
}

.item-link.active {
  background: #eff6ff;
  color: #3b82f6;
  font-weight: 500;
}

.section-link {
  margin: 0 0.75rem;
}

/* 移动端隐藏 */
@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
</style>
