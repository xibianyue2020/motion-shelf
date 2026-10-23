import { ProgressiveBlur } from '@/components/core/progressive-blur';

export function ProgressiveBlurBasic() {
  return (
    <div className='relative my-4 aspect-square w-[300px] overflow-hidden rounded-[4px]'>
      <img
        src='/motion-shelf/assets/motion-scene-03.svg'
        alt='Benjamin Spiers - Moonlight 2023'
        className='absolute inset-0'
      />
      <ProgressiveBlur
        className='pointer-events-none absolute bottom-0 left-0 h-[50%] w-full'
        blurIntensity={6}
      />
      <div className='absolute bottom-0 left-0'>
        <div className='flex flex-col items-start gap-0 px-5 py-4'>
          <p className='text-base font-medium text-white'>本杰明·斯皮尔斯</p>
          <span className='mb-2 text-base text-zinc-300'>月光，2023</span>
          <p className='text-base text-white'>亚麻布面油画，40 × 30 厘米</p>
        </div>
      </div>
    </div>
  );
}
