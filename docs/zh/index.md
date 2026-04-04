---
layout: home

hero:
  name: Goldfish Scheme
  text: 让 Scheme 和 Python 一样易用
  tagline: R7RS-small 兼容的 Scheme 解释器，拥有 Python 风格的丰富标准库
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/MoganLab/goldfish
    - theme: alt
      text: API 文档
      link: /zh/api/liii/

features:
  - icon: 🎯
    title: 简洁高效
    details: 兼容 R7RS-small 标准，仅依赖 S7 Scheme 和 tbox，小巧且快速。
  - icon: 🐍
    title: Python 风格
    details: 提供类似 Python 的丰富标准库，包括 HTTP、JSON、OS、路径操作等。
  - icon: 🤖
    title: AI 友好
    details: 代码结构清晰，AI 编程友好，易于学习和使用。
  - icon: 📦
    title: 丰富库支持
    details: 内置大量 SRFI 实现，以及 liii 扩展库。
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
