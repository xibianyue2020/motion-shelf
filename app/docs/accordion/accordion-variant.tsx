import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { ChevronRight } from 'lucide-react';

export function AccordionVariant() {
  return (
    <Accordion
      className='flex w-full flex-col'
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.7,
        },
      }}
    >
      <AccordionItem value='getting-started' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              如何开始使用？
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            先完成安装，再将动效组件添加到项目中。本节会带你了解基础配置与核心功能，帮助你快速开始。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              常用动画参数有哪些？
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            通过调整时长、缓动和延迟来定制动画，让效果更加顺滑，并适配应用的交互节奏。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-features' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              如何使用进阶功能？
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            尝试串联动画、创建复杂序列，并结合动作感应制作更丰富的交互效果。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-support' className='py-2'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center'>
            <ChevronRight className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50' />
            <div className='ml-2 text-zinc-950 dark:text-zinc-50'>
              如何参与社区？
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-left'>
          <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400'>
            参与社区讨论、贡献代码并分享经验，也可以在这里获取实用资源与最新动态。
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
