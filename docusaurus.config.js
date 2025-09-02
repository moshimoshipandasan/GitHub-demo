// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GitHub実践ワークショップ',
  tagline: 'GitHubを使いこなして、世界に作品を発信しよう！',
  favicon: 'img/logo.png',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://moshimoshipandasan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/GitHub-demo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'moshimoshipandasan', // Usually your GitHub org/user name.
  projectName: 'GitHub-demo', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/itoksk/GitHub-demo/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/itoksk/GitHub-demo/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GitHub Workshop',
        logo: {
          alt: 'GitHub Workshop Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'ワークショップ',
          },
          {to: '/blog', label: 'ブログ', position: 'left'},
          {
            href: 'https://github.com/itoksk/GitHub-demo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'ワークショップ',
                to: '/docs/intro',
              },
              {
                label: '基礎編',
                to: '/docs/basics/day1',
              },
              {
                label: '応用編',
                to: '/docs/advanced/gas-intro',
              },
            ],
          },
          {
            title: 'リソース',
            items: [
              {
                label: 'トラブルシューティング',
                to: '/docs/resources/troubleshooting',
              },
              {
                label: '用語集',
                to: '/docs/resources/glossary',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'ブログ',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/itoksk/GitHub-demo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GitHub Workshop. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'javascript', 'json'],
      },
    }),
};

export default config;