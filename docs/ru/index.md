---
layout: home

hero:
  name: Goldfish Scheme
  text: Сделайте Scheme таким же простым, как Python
  tagline:
    Интерпретатор Scheme, совместимый с R7RS-small, с универсальной стандартной
    библиотекой в стиле Python
  actions:
    - theme: brand
      text: Начать
      link: /ru/guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/MoganLab/goldfish
    - theme: alt
      text: API Документация
      link: /ru/api/liii/

features:
  - icon: 🎯
    title: Простой и Эффективный
    details:
      Совместимость с R7RS-small, зависит только от S7 Scheme и tbox, компактный
      и быстрый.
  - icon: 🐍
    title: Python-подобный
    details:
      Богатая стандартная библиотека, включая HTTP, JSON, OS, операции с путями
      и т.д.
  - icon: 🤖
    title: Дружелюбный к AI
    details:
      Четкая структура кода, удобный для AI-программирования, легко изучать.
  - icon: 📦
    title: Поддержка Библиотек
    details: Встроенные обширные реализации SRFI и библиотеки расширений liii.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.vp-doc a {
  text-decoration: none;
}
</style>
