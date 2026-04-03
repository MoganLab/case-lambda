// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'

export default {
  Layout,
  enhanceApp({ app: _app, router: _router, siteData: _siteData }) {
    // ...
  },
} satisfies Theme
