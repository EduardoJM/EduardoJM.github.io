import { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import math from 'remark-math';
import katex from 'rehype-katex';
import { themes } from 'prism-react-renderer';

const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config: Config = {
  title: 'Eduardo Oliveira',
  tagline: 'Portfolio Eduardo Oliveira',
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
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EduardoJM/EduardoJM.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./theme.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig: {
    navbar: {
      style: 'dark',
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'right',
          label: 'Início',
        },
        {
          to: '/tags',
          position: 'right',
          label: 'Tags',
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
              label: 'Início',
              to: '/',
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
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eduardo Oliveira. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
  } satisfies Preset.ThemeConfig,

  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
