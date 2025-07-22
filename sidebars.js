/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '基礎編',
      items: [
        'basics/day1',
        'basics/day2',
        'basics/day3',
        'basics/day4',
        'basics/day5',
        'basics/day6',
      ],
    },
    {
      type: 'category',
      label: '応用編',
      items: [
        'advanced/gas-intro',
        'advanced/classroom-teacher',
        'advanced/github-tips',
      ],
    },
    {
      type: 'category',
      label: 'テトリスワークショップ',
      items: [
        'tetris-workshop/intro',
        'tetris-workshop/programming-exercises',
        'tetris-workshop/gesture-customization',
      ],
    },
    {
      type: 'category',
      label: 'ライセンス',
      items: [
        'license/intro',
        'license/choosing-license',
        'license/adding-license',
        'license/license-details',
        'license/education-guide',
      ],
    },
    {
      type: 'category',
      label: 'リソース',
      items: [
        'resources/what-is-github',
        'resources/troubleshooting',
        'resources/glossary',
        'resources/teacher-guide',
        'resources/templates',
        'resources/workshop-development-guide',
      ],
    },
  ],
};

export default sidebars;