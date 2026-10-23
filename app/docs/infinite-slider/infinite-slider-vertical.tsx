import { InfiniteSlider } from '@/components/core/infinite-slider';

export function InfiniteSliderVertical() {
  return (
    <div className='flex h-[350px] space-x-4'>
      <InfiniteSlider direction='vertical'>
        <img
          src='/motion-shelf/assets/motion-scene-04.svg'
          alt='Dean blunt - Black Metal 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-01.svg'
          alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-02.svg'
          alt='Yung Lean - Stardust'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-03.svg'
          alt='Lana Del Rey - Ultraviolence'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-04.svg'
          alt='A$AP Rocky - Tailor Swif'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-01.svg'
          alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
      <InfiniteSlider direction='vertical' reverse>
        <img
          src='/motion-shelf/assets/motion-scene-02.svg'
          alt='DAYS BEFORE RODEO - Travis Scott'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-03.svg'
          alt="You're in My System - TORYONTHEBEAT"
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-04.svg'
          alt="You can't tell me - People Make the World Go Round"
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-01.svg'
          alt='ye - Kanye West'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-02.svg'
          alt='Slime Season 3 - Young Thug'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='/motion-shelf/assets/motion-scene-03.svg'
          alt='SWAG - 8ruki'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
    </div>
  );
}
