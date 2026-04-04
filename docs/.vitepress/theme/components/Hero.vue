<script setup lang="ts">
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()

interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
}

interface HeroConfig {
  name?: string
  text?: string
  tagline?: string
  image?: {
    src?: string
    alt?: string
  }
  actions?: HeroAction[]
}

interface Feature {
  icon?: string
  title?: string
  details?: string
}

const hero = frontmatter.value.hero as HeroConfig | undefined
const features = frontmatter.value.features as Feature[] | undefined

function getButtonClass(theme?: string): string {
  return theme === 'brand' ? 'btn-primary' : 'btn-secondary'
}

function resolveLink(link: string): string {
  if (link.startsWith('http')) return link
  return withBase(link)
}
</script>

<template>
  <div class="hero">
    <!-- Hero 区域 -->
    <div class="hero-content">
      <!-- Logo -->
      <div v-if="hero?.image?.src" class="hero-logo">
        <img :src="withBase(hero.image.src)" :alt="hero.image.alt || 'Logo'" />
      </div>

      <!-- 标题 -->
      <h1 v-if="hero?.name" class="hero-name">{{ hero.name }}</h1>
      <p v-if="hero?.text" class="hero-text">{{ hero.text }}</p>
      <p v-if="hero?.tagline" class="hero-tagline">{{ hero.tagline }}</p>

      <!-- 按钮 -->
      <div v-if="hero?.actions?.length" class="hero-actions">
        <a
          v-for="action in hero.actions"
          :key="action.text"
          :href="resolveLink(action.link)"
          :class="['btn', getButtonClass(action.theme)]"
          :target="action.link.startsWith('http') ? '_blank' : undefined"
        >
          {{ action.text }}
        </a>
      </div>
    </div>

    <!-- 特性区域 -->
    <div v-if="features?.length" class="features">
      <div v-for="(feature, index) in features" :key="index" class="feature">
        <div v-if="feature.icon" class="feature-icon">{{ feature.icon }}</div>
        <h3 v-if="feature.title" class="feature-title">{{ feature.title }}</h3>
        <p v-if="feature.details" class="feature-details">{{ feature.details }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: 3rem 0;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-logo {
  margin-bottom: 2rem;
}

.hero-logo img {
  width: 200px;
  height: auto;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(120deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.hero-tagline {
  font-size: 1.25rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: linear-gradient(120deg, #3b82f6, #10b981);
  color: white;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #e5e7eb;
  color: #1f2937;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 0 1rem;
}

.feature {
  text-align: center;
  padding: 1.5rem;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.feature-details {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 640px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1.5rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .features {
    grid-template-columns: 1fr;
  }
}
</style>
