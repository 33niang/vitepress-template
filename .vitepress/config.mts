import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的新网站",
  description: "这是一个全新的网站",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '我的第一页', link: '/guide' },
          { text: '我的第二页', link: '/another-page' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo-link' }
    ]
  }
})
