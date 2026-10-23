import { AnimatedGroup } from '@/components/core/animated-group';

export function AnimatedGroupPreset() {
  return (
    <AnimatedGroup
      className='grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4'
      preset='scale'
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
