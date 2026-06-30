import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Vibe Coder's Survival Guide",
  description:
    'The opinionated, AI-friendly stack and learning path for people who build with AI.',
  base: '/vibe-coder-survival-guide/',
  srcDir: '.',
  srcExclude: ['README.md', 'CONTRIBUTING.md', 'docs/**'],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learning Path', link: '/learning-path' },
      {
        text: 'Stacks',
        items: [
          { text: 'Web', link: '/web' },
          { text: 'Mobile', link: '/mobile' },
          { text: 'Backend', link: '/backend' },
          { text: 'AI Apps', link: '/ai-apps' },
        ],
      },
      { text: 'Glossary', link: '/glossary' },
    ],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Universal Toolbelt', link: '/universal-toolbelt' },
          { text: "Buy, Don't Build", link: '/buy-dont-build' },
        ],
      },
      {
        text: 'Pick your stack',
        items: [
          { text: 'Web', link: '/web' },
          { text: 'Mobile', link: '/mobile' },
          { text: 'Backend', link: '/backend' },
          { text: 'AI Apps', link: '/ai-apps' },
        ],
      },
      {
        text: 'Learn & reference',
        items: [
          { text: 'Learning Path', link: '/learning-path' },
          { text: 'Skills & Plugins', link: '/skills-plugins' },
          { text: 'Glossary', link: '/glossary' },
        ],
      },
    ],
    search: { provider: 'local' },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ismail9k/vibe-coder-survival-guide',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/ismail9k/vibe-coder-survival-guide/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
