'use client';
import { useRef } from 'react';
import { ScrollProgress } from '@/components/core/scroll-progress';

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  <p key={i} className='pb-4 font-mono text-sm text-zinc-500'>
    这里展示一段占位文本，用来观察内容在不同布局与动效中的呈现效果。你可以替换成自己的标题、介绍和说明文字。
  </p>
));

export function ScrollProgressBasic2() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className='h-[350px] overflow-auto px-8 pb-4 pt-16' ref={containerRef}>
      <div className='border-zin-500 absolute left-0 top-0 z-10 h-10 w-full bg-white dark:bg-zinc-950'>
        <ScrollProgress
          className='absolute top-0 h-10 bg-zinc-200 dark:bg-zinc-800'
          containerRef={containerRef}
        />
        <div className='absolute left-0 top-0 flex h-10 items-center space-x-6 px-8 font-[450]'>
          <a
            href='#'
            className='text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
          >
            杂志
          </a>
          <a
            href='#'
            className='text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
          >
            博客
          </a>
          <a
            href='#'
            className='text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white'
          >
            关于我们
          </a>
        </div>
      </div>
      {dummyContent}
    </div>
  );
}
