---
layout: false
---

<div class="redirect-page">
  <p class="loading">正在跳转...</p>
  <ul class="lang-list">
    <li><a href="/zh/">简体中文</a></li>
    <li><a href="/en/">English</a></li>
    <li><a href="/ja/">日本語</a></li>
    <li><a href="/fr/">Français</a></li>
    <li><a href="/ru/">Русский</a></li>
  </ul>
</div>

<style>
.redirect-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  text-align: center;
  padding: 2rem;
}

.loading {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.lang-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.lang-list li {
  margin: 0;
}

.lang-list a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #f3f4f6;
  color: #4b5563;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.lang-list a:hover {
  background: #3b82f6;
  color: white;
}
</style>
