'use client';

import { useState } from 'react';
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/components/core/disclosure';
import { motion } from 'motion/react';

export function DisclosureCard() {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: 'blur(0px)' },
    expanded: { scale: 1.1, filter: 'blur(3px)' },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: 'spring',
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className='relative h-[350px] w-[290px] overflow-hidden rounded-xl'>
      <div onClick={() => setIsOpen(!isOpen)}>
        <motion.img
          src='/motion-shelf/assets/motion-scene-02.svg'
          alt='Les others studio - Que la montagne est belle ⛰'
          className='pointer-events-none h-auto w-full select-none'
          animate={isOpen ? 'expanded' : 'collapsed'}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className='absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50'
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className='w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
          >
            lesothers.studio
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className='flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700'>
            <p>群山真美 🗻</p>
            <p className='line-clamp-3'>
              “越野跑步”主题活动展示了全新越野系列，产品来自 <strong className='font-medium'>@salomon</strong>,
              希望呈现跑者感受到的强烈体验，以及每双鞋与自然环境的联系。为了记录 Pulsar Trail Pro 2 的真实表现，团队跟随运动员走进海拔 2000 米的法国阿尔卑斯山。
            </p>
            <button
              className='mt-3 w-full rounded-[4px] border border-zinc-700 bg-zinc-900 px-4 py-1 text-zinc-50 transition-colors duration-300 hover:bg-zinc-800'
              type='button'
            >
              了解详情
            </button>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
}
