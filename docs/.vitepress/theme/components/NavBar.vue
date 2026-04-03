<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()

const navItems = [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/getting-started' },
  { text: 'GitHub', link: 'https://github.com/MoganLab/goldfish' },
]
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <a href="/" class="logo">
        <span class="logo-icon">🐟</span>
        <span class="logo-text">{{ site.title }}</span>
      </a>

      <div class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.text"
          :href="item.link"
          class="nav-link"
          :target="item.link.startsWith('http') ? '_blank' : undefined"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(120deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #3b82f6;
}
</style>
