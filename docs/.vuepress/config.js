module.exports = {
  title: 'Fractal',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Github', link: 'https://github.com/frctl/fractal' },
    ],
    sidebar: [
      {
        collapsable: false,
        children: [
          '/guide/',
          '/guide/installation',
          '/guide/upgrading',
          '/guide/getting-started',
          '/guide/project-settings'
        ]
      }
    ]
  }
}
