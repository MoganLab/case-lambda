import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 构建输出目录 (docs/dist/)
  outDir: './dist',

  // 基础配置 (GitHub Pages 项目站点需要设置子路径)
  base: '/case-lambda/',

  // 清理 URL
  cleanUrls: true,

  // 最后更新时间
  lastUpdated: true,

  // 主题配置（共享）
  themeConfig: {
    // Logo（只显示 logo，不显示 title）
    logo: '/GoldfishScheme-logo.png',

    // 搜索配置
    search: {
      provider: 'local',
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MoganLab/goldfish' },
    ],
  },

  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Goldfish Scheme',
      description: '让 Scheme 和 Python 一样易用且实用',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/getting-started' },
          {
            text: 'API',
            items: [
              { text: 'Liii 库', link: '/zh/api/liii/' },
              { text: 'SRFI', link: '/zh/api/srfi/' },
              { text: 'Scheme 标准', link: '/zh/api/scheme/' },
            ],
          },
          { text: 'GitHub', link: 'https://github.com/MoganLab/goldfish' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '开始',
              items: [
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '安装', link: '/zh/guide/installation' },
                { text: '命令行用法', link: '/zh/guide/cli' },
              ],
            },
            {
              text: '基础',
              items: [
                { text: 'REPL 使用', link: '/zh/guide/repl' },
                { text: '模块系统', link: '/zh/guide/modules' },
                { text: '模式选择', link: '/zh/guide/modes' },
              ],
            },
          ],
          '/zh/api/liii/': [
            {
              text: '基础库',
              items: [
                { text: '(liii base)', link: '/zh/api/liii/base' },
                { text: '(liii error)', link: '/zh/api/liii/error' },
                { text: '(liii check)', link: '/zh/api/liii/check' },
              ],
            },
            {
              text: '数据结构',
              items: [
                { text: '(liii list)', link: '/zh/api/liii/list' },
                { text: '(liii vector)', link: '/zh/api/liii/vector' },
                { text: '(liii string)', link: '/zh/api/liii/string' },
                { text: '(liii hash-table)', link: '/zh/api/liii/hash-table' },
              ],
            },
            {
              text: '系统与 IO',
              items: [
                { text: '(liii sys)', link: '/zh/api/liii/sys' },
                { text: '(liii os)', link: '/zh/api/liii/os' },
                { text: '(liii path)', link: '/zh/api/liii/path' },
              ],
            },
            {
              text: '网络与数据',
              items: [
                { text: '(liii http)', link: '/zh/api/liii/http' },
                { text: '(liii json)', link: '/zh/api/liii/json' },
                { text: '(liii uuid)', link: '/zh/api/liii/uuid' },
              ],
            },
            {
              text: '函数式编程',
              items: [
                { text: '(liii case)', link: '/zh/api/liii/case' },
                { text: '(liii option)', link: '/zh/api/liii/option' },
                { text: '(liii either)', link: '/zh/api/liii/either' },
                { text: '(liii range)', link: '/zh/api/liii/range' },
              ],
            },
            {
              text: '其他',
              items: [
                { text: '(liii bitwise)', link: '/zh/api/liii/bitwise' },
              ],
            },
          ],
          '/zh/api/srfi/': [
            {
              text: 'SRFI 库',
              items: [
                { text: 'SRFI-1 (List)', link: '/zh/api/srfi/srfi-1' },
                { text: 'SRFI-8 (Receive)', link: '/zh/api/srfi/srfi-8' },
                { text: 'SRFI-9 (Records)', link: '/zh/api/srfi/srfi-9' },
                { text: 'SRFI-13 (String)', link: '/zh/api/srfi/srfi-13' },
                { text: 'SRFI-16 (Case-lambda)', link: '/zh/api/srfi/srfi-16' },
                { text: 'SRFI-39 (Parameters)', link: '/zh/api/srfi/srfi-39' },
                { text: 'SRFI-78 (Test)', link: '/zh/api/srfi/srfi-78' },
                { text: 'SRFI-125 (Hash Table)', link: '/zh/api/srfi/srfi-125' },
                { text: 'SRFI-133 (Vector)', link: '/zh/api/srfi/srfi-133' },
                { text: 'SRFI-151 (Bitwise)', link: '/zh/api/srfi/srfi-151' },
                { text: 'SRFI-196 (Range)', link: '/zh/api/srfi/srfi-196' },
                { text: 'SRFI-216 (SICP)', link: '/zh/api/srfi/srfi-216' },
              ],
            },
          ],
          '/zh/api/scheme/': [
            {
              text: 'R7RS 标准库',
              items: [
                { text: '(scheme base)', link: '/zh/api/scheme/base' },
                { text: '(scheme case-lambda)', link: '/zh/api/scheme/case-lambda' },
                { text: '(scheme char)', link: '/zh/api/scheme/char' },
                { text: '(scheme file)', link: '/zh/api/scheme/file' },
                { text: '(scheme time)', link: '/zh/api/scheme/time' },
              ],
            },
          ],
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        outline: {
          label: '页面导航',
        },
        lastUpdatedText: '最后更新',
        editLink: {
          pattern: 'https://github.com/MoganLab/case-lambda/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        footer: {
          message: '基于 Apache 2.0 许可发布',
          copyright: 'Copyright © 2024 Goldfish Scheme Authors',
        },
      },
    },
    // 英文
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Goldfish Scheme',
      description: 'Make Scheme as easy to use as Python',
      link: '/en/',
      themeConfig: {
        footer: {
          message: 'Released under the Apache 2.0 License',
          copyright: 'Copyright © 2024 Goldfish Scheme Authors',
        },
      },
    },
    // 日语
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Goldfish Scheme',
      description: 'Scheme を Python のように使いやすく',
      link: '/ja/',
      themeConfig: {
        footer: {
          message: 'Apache 2.0 ライセンスの下で公開',
          copyright: 'Copyright © 2024 Goldfish Scheme Authors',
        },
      },
    },
    // 法语
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'Goldfish Scheme',
      description: 'Rendez Scheme aussi facile que Python',
      link: '/fr/',
      themeConfig: {
        footer: {
          message: 'Publié sous licence Apache 2.0',
          copyright: 'Copyright © 2024 Goldfish Scheme Authors',
        },
      },
    },
    // 俄语
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'Goldfish Scheme',
      description: 'Сделайте Scheme таким же простым, как Python',
      link: '/ru/',
      themeConfig: {
        footer: {
          message: 'Выпущено под лицензией Apache 2.0',
          copyright: 'Copyright © 2024 Goldfish Scheme Authors',
        },
      },
    },
  },
})
