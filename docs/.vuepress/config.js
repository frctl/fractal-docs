module.exports = {
  base: '/',
  title: 'Fractal',
  serviceWorker: false,
  description: 'Powerful component libraries & styleguides that fit the way you work.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    docsDir: 'docs',
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'frctl/fractal-docs',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/guide/': [
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
            '/guide/core-concepts/view-templates',
            '/guide/core-concepts/context-data',
            '/guide/core-concepts/configuration-files',
            '/guide/core-concepts/naming',
            '/guide/core-concepts/statuses',
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            '/guide/components/',
            '/guide/components/creating-a-component',
            '/guide/components/preview-layouts',
            '/guide/components/variants',
            '/guide/components/including-sub-components',
            '/guide/components/notes',
            '/guide/components/configuration-reference'
          ]
        },
        {
          title: 'Documentation Pages',
          collapsable: false,
          children: [
            '/guide/documentation/',
            '/guide/documentation/dynamic-docs',
            '/guide/documentation/configuration-reference',
          ]
        },
        {
          title: 'Collections',
          collapsable: false,
          children: [
            '/guide/collections/',
            '/guide/collections/configuration-reference',
          ]
        },
        {
          title: 'Web UI',
          collapsable: false,
          children: [
            '/guide/web/',
            '/guide/web/development-server',
            '/guide/web/exporting-static-html',
            '/guide/web/default-theme',
            '/guide/web/configuration-reference',
          ]
        },
        {
          title: 'Fractal CLI',
          collapsable: false,
          children: [
            '/guide/cli/',
            '/guide/cli/custom-commands',
            '/guide/cli/interactive-mode',
            '/guide/cli/commands-reference'
          ]
        },
        {
          title: 'Customisation',
          collapsable: false,
          children: [
            '/guide/customisation/',
            '/guide/customisation/template-engines',
            '/guide/customisation/web-themes'
          ]
        },
        {
          title: 'Integration',
          collapsable: false,
          children: [
            '/guide/integration/build-tools',
            '/guide/integration/including-as-dependency',
            '/guide/integration/integrating-into-production'
          ]
        }
      ],
      '/api/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/api/'
          ]
        },
        {
          title: 'Endpoints',
          collapsable: false,
          children: [
            '/api/endpoints/fractal',
            '/api/endpoints/fractal-components',
            '/api/endpoints/fractal-docs',
            '/api/endpoints/fractal-web',
            '/api/endpoints/fractal-cli'
          ]
        },
        {
          title: 'Entities',
          collapsable: false,
          children: [
            '/api/entities/component',
            '/api/entities/doc',
            '/api/entities/collection',
            '/api/entities/server',
            '/api/entities/builder',
            '/api/entities/web-theme',
            '/api/entities/adapter'
          ]
        }
      ]
    }
  }
}
