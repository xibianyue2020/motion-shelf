type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NAVIGATION: NavigationGroup[] = [
  {
    name: '开始使用',
    children: [
      {
        name: '组件总览',
        href: '/docs',
      },
      {
        name: '安装说明',
        href: '/docs/installation',
      },
    ],
  },
  {
    name: '基础组件',
    children: [
      {
        name: 'Accordion',
        href: '/docs/accordion',
      },
      {
        name: 'Animated Background',
        href: '/docs/animated-background',
      },
      {
        name: 'Animated Group',
        href: '/docs/animated-group',
      },
      {
        name: 'Border Trail',
        href: '/docs/border-trail',
      },
      {
        name: 'Carousel',
        href: '/docs/carousel',
      },
      {
        name: 'Cursor',
        href: '/docs/cursor',
      },
      {
        name: 'Dialog',
        href: '/docs/dialog',
      },
      {
        name: 'Disclosure',
        href: '/docs/disclosure',
      },
      {
        name: 'In View',
        href: '/docs/in-view',
      },
      {
        name: 'Infinite Slider',
        href: '/docs/infinite-slider',
      },
      {
        name: 'Transition Panel',
        href: '/docs/transition-panel',
      },
    ],
  },
  {
    name: '文字动效',
    children: [
      {
        name: 'Text Effect',
        href: '/docs/text-effect',
      },
      {
        name: 'Text Loop',
        href: '/docs/text-loop',
      },
      {
        name: 'Text Morph',
        href: '/docs/text-morph',
      },
      {
        name: 'Text Roll',
        href: '/docs/text-roll',
      },
      {
        name: 'Text Scramble',
        href: '/docs/text-scramble',
      },
      {
        name: 'Text Shimmer',
        href: '/docs/text-shimmer',
      },
      {
        name: 'Text Shimmer Wave',
        href: '/docs/text-shimmer-wave',
      },
    ],
  },
  {
    name: '数字动效',
    children: [
      {
        name: 'Animated Number',
        href: '/docs/animated-number',
      },
      {
        name: 'Sliding Number',
        href: '/docs/sliding-number',
      },
    ],
  },
  {
    name: '交互动效',
    children: [
      {
        name: 'Dock',
        href: '/docs/dock',
      },
      {
        name: 'Glow Effect',
        href: '/docs/glow-effect',
      },
      {
        name: 'Image Comparison',
        href: '/docs/image-comparison',
      },
      {
        name: 'Scroll Progress',
        href: '/docs/scroll-progress',
      },
      {
        name: 'Spotlight',
        href: '/docs/spotlight',
      },
      {
        name: 'Spinning Text',
        href: '/docs/spinning-text',
      },
      {
        name: 'Tilt',
        href: '/docs/tilt',
      },
    ],
  },
  {
    name: '工具栏',
    children: [
      {
        name: 'Toolbar Dynamic',
        href: '/docs/toolbar-dynamic',
      },
      {
        name: 'Toolbar Expandable',
        href: '/docs/toolbar-expandable',
      },
    ],
  },
  {
    name: '进阶效果',
    children: [
      {
        name: 'Magnetic',
        href: '/docs/magnetic',
      },
      {
        name: 'Morphing Dialog',
        href: '/docs/morphing-dialog',
      },
      {
        name: 'Morphing Popover',
        href: '/docs/morphing-popover',
      },
      {
        name: 'Progressive Blur',
        href: '/docs/progressive-blur',
      },
    ],
  },
];
