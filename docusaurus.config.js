// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline: 'Developer documentation, API Reference, SDKs and Examples',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudlayerio', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          routeBasePath: '/',
          path: 'docs/api-reference'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-sdks',
        path: 'docs/sdks',
        routeBasePath: 'sdks',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-examples',
        path: 'docs/examples',
        routeBasePath: 'examples',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'cloudlayer.io',
        logo: {
          alt: 'cloudlayer.io',
          src: 'img/logo.svg',
          width: 32,
          height: 32,
          href: "https://cloudlayer.io",
          target: "_self"
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'API Reference',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'SDKs',
            docsPluginId: 'docs-sdks'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Examples',
            docsPluginId: 'docs-examples'
          },
          {
            href: 'https://blog.cloudlayer.io',
            label: 'Blog',
          },
          {
            href: 'https://github.com/cloudlayerio/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API Reference',
                to: '/',
              },
              {
                label: 'SDKs',
                to: '/sdks',
              },
              {
                label: 'Examples',
                to: '/examples',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/cloudlayerio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.cloudlayer.io'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cloudlayer.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
