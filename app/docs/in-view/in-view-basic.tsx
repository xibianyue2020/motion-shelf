import { InView } from '@/components/core/in-view';

export function InViewBasic() {
  return (
    <div className='h-[350px] w-full overflow-auto'>
      <div className='py-12 text-center text-sm'>向下滚动</div>
      <div className='flex h-[500px] items-end justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className='max-w-96'>
            <p className=''>
              <strong className='font-medium'>
                用动效组件打造更生动的界面。
              </strong>{' '}
              面向开发者与设计师打造。借助 Motion 与直观的 API，轻松组合复杂动画，为项目创建更鲜活的交互界面。
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
}
