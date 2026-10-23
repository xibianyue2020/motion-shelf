import { InView } from '@/components/core/in-view';

export function InViewBasicMultiple() {
  return (
    <div className='h-[350px] w-full overflow-y-auto overflow-x-hidden'>
      <div className='mb-36 py-12 text-center text-sm'>向下滚动</div>
      <div className='flex h-[350px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='max-w-96 bg-zinc-100 p-4'>
            <p className='text-zinc-600'>
              <strong className='font-medium text-zinc-900'>田径</strong>{' '}
              观看跑步、跳跃与投掷比赛，感受运动员在不同项目中的精彩表现。
            </p>
          </div>
        </InView>
      </div>
      <div className='flex h-[350px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='max-w-96 bg-zinc-900 p-4'>
            <p className='text-zinc-400'>
              <strong className='font-medium text-zinc-50'>游泳</strong>{' '}
              选手在泳池中竞速，以不同泳姿挑战速度、争夺奖牌。
            </p>
          </div>
        </InView>
      </div>
      <div className='flex h-[350px] items-end justify-center overflow-x-hidden px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='max-w-96 bg-zinc-100 p-4'>
            <p className='text-zinc-600'>
              <strong className='font-medium'>体操</strong> 体操选手完成翻腾与跳跃，在一连串动作中展现力量与平衡。
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
}
