import { InfiniteSlider } from '@/components/core/infinite-slider';

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24}>
      <img
        src='/motion-shelf/assets/motion-scene-02.svg'
        alt='Dean blunt - Black Metal 2'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-03.svg'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-04.svg'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-01.svg'
        alt='Lana Del Rey - Ultraviolence'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-02.svg'
        alt='A$AP Rocky - Tailor Swif'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='/motion-shelf/assets/motion-scene-03.svg'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-[4px]'
      />
    </InfiniteSlider>
  );
}
