import { TextShimmer } from '@/components/core/text-shimmer';

export function TextShimmerBasic() {
  return (
    <TextShimmer className='font-mono text-sm' duration={1}>
      正在生成代码…
    </TextShimmer>
  );
}
