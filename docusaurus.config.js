const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'TAP Developer Platform',
  tagline:
    'Build and verify trusted AI systems with the Trust Assurance Protocol (TAP) - Simple APIs for verifiable credentials and AI agent compliance.',
  url: 'https://docs.dyte.io',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'cli',
    path: 'docs/cli',
    routeBasePath: '/cli',
  },
  {
    id: 'plugin-sdk',
    path: 'docs/plugin-sdk',
    routeBasePath: '/plugin-sdk',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Community packages
  {
    id: 'community-packages',
    path: 'docs/community-packages',
    routeBasePath: '/community-packages',
  },

  // Web UI Kits
  {
    id: 'ui-kit',
    path: 'docs/ui-kit',
    routeBasePath: '/ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'react-ui-kit',
    path: 'docs/react-ui-kit',
    routeBasePath: '/react-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'angular-ui-kit',
    path: 'docs/angular-ui-kit',
    routeBasePath: '/angular-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Web Core
  {
    id: 'web-core',
    path: 'docs/web-core',
    routeBasePath: '/web-core',
    versions: {
      current: {
        label: '2.x.x',
      },
    },
  },
  // React Web Core
  {
    id: 'react-web-core',
    path: 'docs/react-web-core',
    routeBasePath: '/react-web-core',
    versions: {
      current: {
        label: '2.x.x',
      },
    },
  },

  // Mobile Core
  {
    id: 'android-core',
    path: 'docs/android-core',
    routeBasePath: '/android-core',
    versions: {
      current: {
        label: '2.x.x',
      },
    },
  },
  {
    id: 'flutter-core',
    path: 'docs/flutter-core',
    routeBasePath: '/flutter-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'ios-core',
    path: 'docs/ios-core',
    routeBasePath: '/ios-core',
    versions: {
      current: {
        label: '2.x.x',
      },
    },
  },
  {
    id: 'rn-core',
    path: 'docs/rn-core',
    routeBasePath: '/rn-core',
    versions: {
      current: {
        label: '0.x.x',
      },
    },
  },

  // Mobile UI Kits
  {
    id: 'android',
    path: 'docs/android',
    routeBasePath: '/android',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'flutter',
    path: 'docs/flutter',
    routeBasePath: '/flutter',
    versions: {
      current: {
        label: '0.7.x',
      },
    },
  },
  {
    id: 'ios',
    path: 'docs/ios',
    routeBasePath: '/ios',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'react-native',
    path: 'docs/rn-ui-kit',
    routeBasePath: '/react-native',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/dyte-io/docs/tree/main/',
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        if (path.startsWith('/guides/capabilities/chat/export-chat-dump')) {
          return ['/capabilities/export-chat-dump'];
        }

        if (path.startsWith('/guides/capabilities/misc/embed')) {
          return ['/guides/capabilities/embed'];
        }

        if (path.startsWith('/react-ui-kit/basics/integrate')) {
          return ['/react-ui-kit/basics/components-basics'];
        }

        if (
          path.startsWith(
            '/guides/capabilities/misc/livestreaming-other-platforms',
          )
        ) {
          return [
            '/guides/capabilities/livestreaming-other-platforms',
            '/guides/capabilities/recording/livestream-recording',
          ];
        }

        if (
          path.startsWith('/guides/capabilities/video/add-virtual-background')
        ) {
          return [
            '/guides/capabilities/middleware/add-virtual-background',
            '/guides/capabilities/customization/add-virtual-background',
          ];
        }

        if (path.startsWith('/guides/live-video/concepts')) {
          return ['/guides/live-video/concepts-live-video'];
        }

        if (path.startsWith('/guides/voice-conf/concepts')) {
          return ['/guides/voice-conf/concepts-voice-conf'];
        }

        if (path.startsWith('/guides/livestream/concepts')) {
          return ['/guides/livestream/concepts-ils'];
        }

        if (path.startsWith(''))
          if (path.startsWith('/web-core/livestreaming')) {
            return [
              path.replace(
                '/web-core/livestreaming',
                '/web-core/livestreaming/livestream-apis',
              ),
            ];
          }
        if (path.startsWith('/rn-core/livestreaming')) {
          return [
            path.replace(
              '/rn-core/livestreaming',
              '/rn-core/livestreaming/livestream-apis',
            ),
          ];
        }
        if (path.startsWith('/react-web-core/livestreaming')) {
          return [
            path.replace(
              '/react-web-core/livestreaming',
              '/react-web-core/livestreaming/livestream-apis',
            ),
          ];
        }
        if (path.startsWith('/web-core/stage')) {
          return [
            path.replace(
              '/web-core/stage',
              '/web-core/livestreaming/state-management-apis',
            ),
          ];
        }
        if (path.startsWith('/rn-core/stage')) {
          return [
            path.replace(
              '/rn-core/stage',
              '/rn-core/livestreaming/state-management-apis',
            ),
          ];
        }
        if (path.startsWith('/react-web-core/stage')) {
          return [
            path.replace(
              '/react-web-core/stage',
              '/react-web-core/livestreaming/state-management-apis',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/webhooks')) {
          return [
            path.replace('/guides/capabilities/webhooks', '/guides/webhooks'),
            path.replace(
              '/guides/capabilities/webhooks',
              '/guides/features/webhooks',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/recording')) {
          return [
            path.replace('/guides/capabilities/recording', '/guides/recording'),
            path.replace(
              '/guides/capabilities/recording',
              '/guides/features/recording',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/recording')) {
          return [
            path.replace('/guides/capabilities/recording', '/guides/recording'),
            path.replace(
              '/guides/capabilities/recording',
              '/guides/features/recording',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/embed')) {
          return [
            path.replace('/guides/capabilities/embed', '/guides/embed'),
            path.replace(
              '/guides/capabilities/embed',
              '/guides/features/embed',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/export-chat-dump')) {
          return [
            path.replace(
              '/guides/capabilities/export-chat-dump',
              '/guides/export-chat-dump',
            ),
            path.replace(
              '/guides/capabilities/export-chat-dump',
              '/guides/features/export-chat-dump',
            ),
          ];
        }
        if (path.startsWith('/guides/capabilities/breakoutroom')) {
          return [
            path.replace(
              '/guides/capabilities/breakoutroom',
              '/guides/breakoutroom',
            ),
            path.replace(
              '/guides/capabilities/breakoutroom',
              '/guides/features/breakoutroom',
            ),
          ];
        }
        /* for everything else */
        if (path.startsWith('/guides/capabilities')) {
          return [path.replace('/guides/capabilities', '/guides/features')];
        }
        if (path === '/ui-kit') {
          return [
            '/javascript/advanced-usage',
            '/javascript/customize-meeting-ui',
            '/javascript/events',
            '/javascript/installation',
            '/javascript/quickstart',
            '/javascript/reference/chat-message',
            '/javascript/reference/connection-config',
            '/javascript/reference/dyte-client',
            '/javascript/reference/dyte-control-bar',
            '/javascript/reference/dyte-errors',
            '/javascript/reference/dyte-grid',
            '/javascript/reference/dyte-meeting-events',
            '/javascript/reference/dyte-plugin',
            '/javascript/reference/dyte-ui-config',
            '/javascript/reference/meeting',
            '/javascript/reference/participant',
            '/javascript/reference/self-participant',
            '/javascript/sample-app',
            '/javascript/usage',
            '/javascript/virtual-background',
            '/javascript/',
          ];
        }
        if (path === '/react-ui-kit') {
          return [
            '/react/advanced-usage',
            '/react/customize-meeting-ui',
            '/react/events',
            '/react/installation',
            '/react/quickstart',
            '/react/reference/chat-message',
            '/react/reference/connection-config',
            '/react/reference/dyte-client',
            '/react/reference/dyte-control-bar',
            '/react/reference/dyte-errors',
            '/react/reference/dyte-grid',
            '/react/reference/dyte-meeting-events',
            '/react/reference/dyte-plugin',
            '/react/reference/dyte-ui-config',
            '/react/reference/meeting',
            '/react/reference/participant',
            '/react/reference/self-participant',
            '/react/sample-app',
            '/react/usage',
            '/react/virtual-background',
            '/react/',
          ];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },
  ],
];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  future: {
    experimental_faster: true,
  },

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  clientModules: [
    require.resolve('./src/client/define-ui-kit.js'),
    require.resolve('./src/client/set-framework.js'),
  ],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js', async: true }],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
          sidebarPath: require.resolve('./sidebars-guides.js'),
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['**/tags/**', '/api/*'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: 'TAP',
        items: [
          {
            label: 'Home',
            to: '/',
          },
          {
            label: 'Documentation',
            to: 'guides',
            className: 'guides-top-header',
          },
          {
            label: 'API Docs',
            to: '/api/',
          },
          {
            label: 'Contact Us',
            to: '/contact',
          },

          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Book a Demo',
            to: '/contact',
            position: 'right',
            className: 'navbar-book-demo button button--primary',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                label: 'Contact Us',
                to: '/contact',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                html: `
                  <div style="display: flex; gap: 16px; align-items: center;">
                    <a href="https://github.com/tap-protocol" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/trust-assurance-protocol/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  </div>
                `
              },
            ],
          },
        ],
        copyright: 'Copyright © Trust Assurance Protocol 2025',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'json',
          'bash',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  // webpack: {
  //   jsLoader: (isServer) => ({
  //     loader: require.resolve('swc-loader'),
  //     options: {
  //       jsc: {
  //         parser: {
  //           syntax: 'typescript',
  //           tsx: true,
  //         },
  //         target: 'es2017',
  //       },
  //       module: {
  //         type: isServer ? 'commonjs' : 'es6',
  //       },
  //     },
  //   }),
  // },
};

module.exports = config;

