module.exports = {
  title: 'Fractal',
  description: 'Powerful component libraries & styleguides that fit the way you work.',
  themeConfig: {
    docsDir: 'docs',
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'samuelgoddard/fractal-docs',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/installation',
          '/guide/upgrading',
          '/guide/getting-started',
          '/guide/project-settings'
        ]
      },
      {
        title: 'Core Concepts',
        collapsable: false,
        children: [
          '/core-concepts/view-templates',
          '/core-concepts/context-data',
          '/core-concepts/configuration-files',
          '/core-concepts/naming',
          '/core-concepts/statuses',
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/',
          '/components/creating-a-component',
          '/components/preview-layouts',
          '/components/variants',
          '/components/including-sub-components',
          '/components/notes',
          '/components/configuration-reference'
        ]
      },
      {
        title: 'Documentation Pages',
        collapsable: false,
        children: [
          '/documentation/',
          '/documentation/dynamic-docs',
          '/documentation/configuration-reference',
        ]
      },
      {
        title: 'Collections',
        collapsable: false,
        children: [
          '/collections/',
          '/collections/configuration-reference',
        ]
      },
      {
        title: 'Web UI',
        collapsable: false,
        children: [
          '/web/',
          '/web/development-server',
          '/web/exporting-static-html',
          '/web/default-theme',
          '/web/configuration-reference',
        ]
      },
      {
        title: 'Fractal CLI',
        collapsable: false,
        children: [
          '/cli/',
          '/cli/custom-commands',
          '/cli/interactive-mode',
          '/cli/commands-reference'
        ]
      },
      {
        title: 'Customisation',
        collapsable: false,
        children: [
          '/customisation/',
          '/customisation/template-engines',
          '/customisation/web-themes'
        ]
      },
      {
        title: 'Integration',
        collapsable: false,
        children: [
          '/integration/build-tools',
          '/integration/including-as-dependency',
          '/integration/integrating-into-production'
        ]
      }
    ]
  }
}
