import { TextLoop } from '@/components/core/text-loop';

export function TextLoopCustomVariantsTransition() {
  return (
    <p className='inline-flex whitespace-pre-wrap text-sm'>
      精美模板，适用于{' '}
      <TextLoop
        className='overflow-y-clip'
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: 'blur(4px)',
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: 'blur(4px)',
          },
        }}
      >
        <span>创业者</span>
        <span>开发者</span>
        <span>设计师</span>
        <span>设计工程师</span>
      </TextLoop>
    </p>
  );
}
