import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { ChevronUp } from 'lucide-react';

export function AccordionIcons() {
  return (
    <Accordion
      className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <AccordionItem value='getting-started' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>开始使用</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            了解动效组件的基础概念。本节介绍安装流程与组件集成方式，帮助你熟悉核心能力，并快速完成第一个动画。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>动画参数</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            了解可用于调整动画的参数，通过控制时长、缓动和延迟，制作流畅自然的动效。你也可以根据网页的交互节奏和视觉风格自定义动画。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-usage' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>进阶用法</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            探索更丰富的动效技巧：串联多个动画、编排复杂序列，并结合动作感应实现交互效果，让页面体验更生动。
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-and-support' className='py-2'>
        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
          <div className='flex items-center justify-between'>
            <div>社区与支持</div>
            <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50' />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            欢迎参与开源社区的讨论与贡献，和开发者交流经验、分享资源。你也可以了解后续功能、实践建议，并为具体使用场景寻求帮助。
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
