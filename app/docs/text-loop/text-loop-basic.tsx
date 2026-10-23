import { TextLoop } from '@/components/core/text-loop';

export function TextLoopBasic() {
  return (
    <TextLoop className='font-mono text-sm'>
      <span>今天有什么可以帮你？</span>
      <span>生成标志</span>
      <span>创建组件</span>
      <span>绘制图表</span>
    </TextLoop>
  );
}
