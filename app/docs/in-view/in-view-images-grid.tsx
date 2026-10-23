'use client';
import { InView } from '@/components/core/in-view';
import { motion } from 'motion/react';

export function InViewImagesGrid() {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className='mb-20 py-12 text-center text-sm'>Scroll down</div>
      <div className='flex h-[1200px] items-end justify-center pb-12'>
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className='columns-2 gap-4 px-8 sm:columns-3'>
            {[
              '/motion-shelf/assets/motion-scene-04.svg',
              '/motion-shelf/assets/motion-scene-01.svg',
              '/motion-shelf/assets/motion-scene-02.svg',
              '/motion-shelf/assets/motion-scene-03.svg',
              '/motion-shelf/assets/motion-scene-04.svg',
              '/motion-shelf/assets/motion-scene-01.svg',
              '/motion-shelf/assets/motion-scene-02.svg',
              '/motion-shelf/assets/motion-scene-03.svg',
              '/motion-shelf/assets/motion-scene-04.svg',
              '/motion-shelf/assets/motion-scene-01.svg',
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    },
                  }}
                  key={index}
                  className='mb-4'
                >
                  <img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className='size-full rounded-lg object-contain'
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
