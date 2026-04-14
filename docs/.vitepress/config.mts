import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '章节',
    items: [
      { text: '命令行', link: '/command-line' },
      { text: '服务器', link: '/servers' },
      { text: '操作系统', link: '/operating-systems' },
      { text: '网络知识', link: '/networking' },
      { text: '安全', link: '/security' },
      { text: '持续集成', link: '/ci' },
      { text: 'Websockets', link: '/websockets' },
      { text: '数据库', link: '/databases' },
      { text: '容器化', link: '/containerization' },
    ],
  },
]

const enSidebar = [
  {
    text: 'Chapters',
    items: [
      { text: 'Command Line', link: '/en/command-line' },
      { text: 'Servers', link: '/en/servers' },
      { text: 'Operating Systems', link: '/en/operating-systems' },
      { text: 'Networking', link: '/en/networking' },
      { text: 'Security', link: '/en/security' },
      { text: 'Continuous Integration', link: '/en/ci' },
      { text: 'Websockets', link: '/en/websockets' },
      { text: 'Databases', link: '/en/databases' },
      { text: 'Containerization', link: '/en/containerization' },
    ],
  },
]

export default defineConfig({
  title: '全栈开发 101',
  description: '从命令行到容器化，一站式全栈开发学习路径',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '章节', link: '/command-line' },
        ],
        sidebar: zhSidebar,
        docFooter: { prev: '上一篇', next: '下一篇' },
        outline: { label: '本页目录' },
        lastUpdated: { text: '最后更新' },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Fullstack 101',
      description: 'A fullstack development learning path from command line to containerization',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Chapters', link: '/en/command-line' },
        ],
        sidebar: { '/en/': enSidebar },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        lastUpdated: { text: 'Last updated' },
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
