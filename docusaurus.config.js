// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Robotics',
  tagline: 'Master Humanoid Robotics from Beginner to Professional',
  favicon: 'img/favicon.ico',

  url: 'https://SomeUnique.github.io',
  baseUrl: '/Physical-AI-Book/',
  organizationName: 'SomeUnique',
  projectName: 'Physical-AI-Book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/robot-pic-social-card.jpg', // Social card / preview image
    navbar: {
      title: 'Physical AI & Robotics',
      logo: {
        alt: 'Robotics Logo',
        src: 'img/robo-pic.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          href: 'https://github.com/SomeUnique',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learning Path',
          items: [
            { label: 'Foundations', to: '/Foundations/introduction' },
            { label: 'ROS 2', to: '/Ros2/architecture' },
            { label: 'Humanoid Development', to: '/Humanoid/kinematics' },
            { label: 'Isaac', to: '/Isaac/platform-overview' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Linkedin', href: 'https://www.linkedin.com/in/minhal-khan-9414b3298/' },
            { label: 'Twitter', href: 'https://x.com/MinhalKhan99217' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/SomeUnique' },
          ],
        },
      ],
    
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'cpp'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
