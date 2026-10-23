import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/core/morphing-dialog';
import { ScrollArea } from '@/components/website/scroll-area';

export function MorphingDialogBasicTwo() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className='border border-gray-200/60 bg-white'
      >
        <div className='flex items-center space-x-3 p-3'>
          <MorphingDialogImage
            src='/motion-shelf/assets/motion-scene-04.svg'
            alt='What I Talk About When I Talk About Running - book cover'
            className='h-8 w-8 object-cover object-top'
            style={{
              borderRadius: '4px',
            }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs'>
              当我谈跑步时，我谈些什么
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
              村上春树
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className='relative h-auto w-[500px] border border-gray-100 bg-white'
        >
          <ScrollArea className='h-[90vh]' type='scroll'>
            <div className='relative p-6'>
              <div className='flex justify-center py-10'>
                <MorphingDialogImage
                  src='/motion-shelf/assets/motion-scene-01.svg'
                  alt='What I Talk About When I Talk About Running - book cover'
                  className='h-auto w-[200px]'
                />
              </div>
              <div className=''>
                <MorphingDialogTitle className='text-black'>
                  当我谈跑步时，我谈些什么
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-400'>
                  村上春树
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700'>
                  <p>
                    村上春树在投身写作后开始跑步，并逐渐完成长距离赛事与铁人三项。在这段回忆中，他谈到跑步如何影响生活，也如何改变自己的写作。
                  </p>
                  <p>
                    这段文字交织着训练记录、旅途见闻与人生回顾：从东京到波士顿，从赛道上的相遇到决定成为作家的瞬间，也记录了创作中的得失与岁月带来的变化。
                  </p>
                  <p>
                    轻松与沉静并存，幽默而富有思考。这本回忆录将跑步的满足感与写作、生活相连。
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className='text-zinc-500' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
