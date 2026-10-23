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
        name: '手风琴',
        href: '/docs/accordion',
      },
      {
        name: '动态背景',
        href: '/docs/animated-background',
      },
      {
        name: '分组入场动效',
        href: '/docs/animated-group',
      },
      {
        name: '边框流光',
        href: '/docs/border-trail',
      },
      {
        name: '内容轮播',
        href: '/docs/carousel',
      },
      {
        name: '跟随光标',
        href: '/docs/cursor',
      },
      {
        name: '弹窗',
        href: '/docs/dialog',
      },
      {
        name: '折叠面板',
        href: '/docs/disclosure',
      },
      {
        name: '入场显现',
        href: '/docs/in-view',
      },
      {
        name: '无限轮播',
        href: '/docs/infinite-slider',
      },
      {
        name: '切换面板',
        href: '/docs/transition-panel',
      },
    ],
  },
  {
    name: '文字动效',
    children: [
      {
        name: '文字入场',
        href: '/docs/text-effect',
      },
      {
        name: '文字轮播',
        href: '/docs/text-loop',
      },
      {
        name: '文字变形',
        href: '/docs/text-morph',
      },
      {
        name: '文字翻滚',
        href: '/docs/text-roll',
      },
      {
        name: '文字扰码',
        href: '/docs/text-scramble',
      },
      {
        name: '文字流光',
        href: '/docs/text-shimmer',
      },
      {
        name: '波浪文字流光',
        href: '/docs/text-shimmer-wave',
      },
    ],
  },
  {
    name: '数字动效',
    children: [
      {
        name: '数字滚动',
        href: '/docs/animated-number',
      },
      {
        name: '数字翻牌',
        href: '/docs/sliding-number',
      },
    ],
  },
  {
    name: '交互动效',
    children: [
      {
        name: '放大坞栏',
        href: '/docs/dock',
      },
      {
        name: '动态光晕',
        href: '/docs/glow-effect',
      },
      {
        name: '图片对比',
        href: '/docs/image-comparison',
      },
      {
        name: '滚动进度',
        href: '/docs/scroll-progress',
      },
      {
        name: '聚光灯',
        href: '/docs/spotlight',
      },
      {
        name: '环绕文字',
        href: '/docs/spinning-text',
      },
      {
        name: '3D 倾斜',
        href: '/docs/tilt',
      },
    ],
  },
  {
    name: '工具栏',
    children: [
      {
        name: '动态工具栏',
        href: '/docs/toolbar-dynamic',
      },
      {
        name: '伸缩工具栏',
        href: '/docs/toolbar-expandable',
      },
    ],
  },
  {
    name: '进阶效果',
    children: [
      {
        name: '磁吸效果',
        href: '/docs/magnetic',
      },
      {
        name: '形变弹窗',
        href: '/docs/morphing-dialog',
      },
      {
        name: '形变浮层',
        href: '/docs/morphing-popover',
      },
      {
        name: '渐进模糊',
        href: '/docs/progressive-blur',
      },
    ],
  },
];
