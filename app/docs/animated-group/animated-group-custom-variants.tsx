import { AnimatedGroup } from '@/components/core/animated-group';

export function AnimatedGroupCustomVariants() {
  return (
    <AnimatedGroup
      className='grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4'
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 1.2,
              type: 'spring',
              bounce: 0.3,
            },
          },
        },
      }}
    >
      <img
        src='/motion-shelf/assets/motion-scene-04.svg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-01.svg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-02.svg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-03.svg'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]'
      />
    </AnimatedGroup>
  );
}
