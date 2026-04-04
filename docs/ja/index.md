---
layout: home

hero:
  name: Goldfish Scheme
  text: Scheme を Python のように使いやすく
  tagline: R7RS-small 互換の Scheme インタープリター、Python のような豊富な標準ライブラリを提供
  image:
    src: /GoldfishScheme-logo.png
    alt: Goldfish Scheme Logo
  actions:
    - theme: brand
      text: はじめる
      link: /ja/guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/MoganLab/goldfish
    - theme: alt
      text: API ドキュメント
      link: /ja/api/liii/

features:
  - icon: 🎯
    title: シンプルで効率的
    details: R7RS-small 互換、S7 Scheme と tbox のみに依存、小さく高速。
  - icon: 🐍
    title: Python ライク
    details: HTTP、JSON、OS、パス操作など、Python に似た豊富な標準ライブラリ。
  - icon: 🤖
    title: AI フレンドリー
    details: 明確なコード構造、AI コーディングに最適、学習しやすい。
  - icon: 📦
    title: 豊富なライブラリ
    details: 多数の SRFI 実装と liii 拡張ライブラリを内蔵。
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
