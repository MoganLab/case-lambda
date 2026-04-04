<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 目录项类型
interface TocItem {
  level: number
  text: string
  link: string
  children?: TocItem[]
}

const headers = ref<TocItem[]>([])
const activeId = ref('')

// 从页面中提取标题
function extractHeaders(): TocItem[] {
  if (typeof document === 'undefined') return []

  const article = document.querySelector('.vp-doc') || document.querySelector('.page')
  if (!article) return []

  const elements = article.querySelectorAll('h2, h3, h4')
  const result: TocItem[] = []

  elements.forEach((el) => {
    const id = el.id
    const level = parseInt(el.tagName[1])
    const text = el.textContent?.replace(/#$/, '').trim() || ''

    if (id && text) {
      result.push({ level, text, link: `#${id}` })
    }
  })

  return result
}

// 更新活动标题
function updateActiveHeader() {
  if (typeof document === 'undefined') return

  const article = document.querySelector('.vp-doc') || document.querySelector('.page')
  if (!article) return

  const elements = article.querySelectorAll('h2, h3, h4')
  let current = ''

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top <= 100) {
      current = el.id
    }
  })

  if (current) {
    activeId.value = current
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  headers.value = extractHeaders()

  // 使用 IntersectionObserver 监听标题
  if (typeof document !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0
      }
    )

    const article = document.querySelector('.vp-doc') || document.querySelector('.page')
    if (article) {
      article.querySelectorAll('h2, h3, h4').forEach((el) => {
        observer?.observe(el)
      })
    }
  }

  window.addEventListener('scroll', updateActiveHeader)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', updateActiveHeader)
})
</script>

<template>
  <aside v-if="headers.length > 0" class="toc">
    <nav class="toc-nav">
      <h2 class="toc-title">本页导航</h2>
      <ul class="toc-list">
        <li
          v-for="header in headers"
          :key="header.link"
          class="toc-item"
          :class="[`level-${header.level}`, { active: activeId === header.link.slice(1) }]"
        >
          <a :href="header.link" class="toc-link">
            {{ header.text }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.toc {
  width: 240px;
  flex-shrink: 0;
  padding: 1.5rem 0;
  position: sticky;
  top: 4rem;
  height: calc(100vh - 4rem);
  overflow-y: auto;
}

.toc-nav {
  padding: 0 1rem;
}

.toc-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem 0;
}

.toc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid #e5e7eb;
}

.toc-item {
  margin: 0;
}

.toc-item.level-2 {
  padding-left: 0.75rem;
}

.toc-item.level-3 {
  padding-left: 1.5rem;
}

.toc-item.level-4 {
  padding-left: 2.25rem;
}

.toc-link {
  display: block;
  padding: 0.375rem 0;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.8125rem;
  line-height: 1.5;
  transition: color 0.2s;
  border-left: 2px solid transparent;
  margin-left: -1px;
}

.toc-link:hover {
  color: #3b82f6;
}

.toc-item.active .toc-link {
  color: #3b82f6;
  font-weight: 500;
  border-left-color: #3b82f6;
}

/* 移动端和平板隐藏 */
@media (max-width: 1280px) {
  .toc {
    display: none;
  }
}
</style>
