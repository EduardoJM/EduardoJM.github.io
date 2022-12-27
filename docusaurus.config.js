// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anotações de Eduardo',
  tagline: 'Repositório de Anotações de Eduardo',
  url: 'https://eduardojm.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EduardoJM', // Usually your GitHub org/user name.
  projectName: 'EduardoJM.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EduardoJM/EduardoJM.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Anotações',
          },
          {
            href: 'https://github.com/EduardoJM/notes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Internet',
            items: [
              {
                label: 'Anotações',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Autor',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EduardoJM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/goticodocalypso',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/edujso/',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Polywork',
                href: 'https://www.polywork.com/eduardo_oliveira',
              },
              {
                label: 'Dev.to',
                href: 'https://dev.to/eduardojm',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eduardo Oliveira. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
