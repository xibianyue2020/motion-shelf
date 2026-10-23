import { Cursor } from '@/components/core/cursor';

export function Cursor3() {
  return (
    <div>
      <div className='p-4'>
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: 'auto', opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: 0.1,
          }}
          className='overflow-hidden'
          springConfig={{
            bounce: 0.01,
          }}
        >
          <img
            src='/motion-shelf/assets/motion-scene-04.svg'
            alt='Christian Church, Eastern Europe'
            className='h-40 w-40'
          />
        </Cursor>
        东欧的基督教堂
      </div>
    </div>
  );
}
