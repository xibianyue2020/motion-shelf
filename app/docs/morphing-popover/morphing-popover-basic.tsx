import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from '@/components/core/morphing-popover';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import * as motion from 'motion/react-client';

export function MorphingPopoverBasic() {
  return (
    <MorphingPopover>
      <MorphingPopoverTrigger asChild>
        <Button variant='outline'>
          <motion.span
            layoutId='morphing-popover-basic-label'
            layout='position'
          >
            打开浮层
          </motion.span>
        </Button>
      </MorphingPopoverTrigger>
      <MorphingPopoverContent className='w-80 p-4 shadow-sm'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <motion.h4
              layoutId='morphing-popover-basic-label'
              layout='position'
              className='leading-none font-medium'
            >
              尺寸
            </motion.h4>
            <p className='text-muted-foreground text-sm'>
              设置图层的尺寸。
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>宽度</Label>
              <Input
                id='width'
                defaultValue='100%'
                className='col-span-2 h-8'
                autoFocus
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>最大宽度</Label>
              <Input
                id='maxWidth'
                defaultValue='300px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>高度</Label>
              <Input
                id='height'
                defaultValue='25px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxHeight'>最大高度</Label>
              <Input
                id='maxHeight'
                defaultValue='none'
                className='col-span-2 h-8'
              />
            </div>
          </div>
        </div>
      </MorphingPopoverContent>
    </MorphingPopover>
  );
}
