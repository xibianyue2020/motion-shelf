'use client';
import { useRef } from 'react';
import { ScrollProgress } from '@/components/core/scroll-progress';

const dummyContent = Array.from({ length: 10 }, (_, i) => (
  <p key={i} className='pb-4 font-mono text-sm text-zinc-500'>
    这里展示一段占位文本，用来观察内容在不同布局与动效中的呈现效果。你可以替换成自己的标题、介绍和说明文字。
  </p>
));

export function ScrollProgressBasic1() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='h-[350px] overflow-auto px-8 pb-16 pt-16'
      ref={containerRef}
    >
      <div className='pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900' />
      <div className='pointer-events-none absolute left-0 top-0 w-full'>
        <div className='absolute left-0 top-0 h-1 w-full bg-[#E6F4FE] dark:bg-[#111927]' />
        <ScrollProgress
          containerRef={containerRef}
          className='absolute top-0 bg-[#0090FF]'
        />
      </div>
      {dummyContent}
    </div>
  );
}
