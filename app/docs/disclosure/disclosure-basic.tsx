import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/components/core/disclosure';

export function DisclosureBasic() {
  return (
    <Disclosure className='w-[330px] rounded-md border border-zinc-200 px-3 dark:border-zinc-700'>
      <DisclosureTrigger>
        <button className='w-full py-2 text-left text-sm' type='button'>
          展开更多
        </button>
      </DisclosureTrigger>
      <DisclosureContent>
        <div className='overflow-hidden pb-3'>
          <div className='pt-1 font-mono text-sm'>
            <p>
              本示例展示了如何使用{' '}
              <strong className='font-bold'>折叠面板</strong> 组件。
            </p>
            <pre className='mt-2 rounded-md bg-zinc-100 p-2 text-xs dark:bg-zinc-950'>
              {`function DisclosureBasic() {\n  return (\n    <Disclosure>\n      <DisclosureTrigger>\n        <button type='button'>\n          展开更多\n        </button>\n      </DisclosureTrigger>\n      <DisclosureContent>\n        <div>示例内容</div>\n      </DisclosureContent>\n    </Disclosure>\n  );`}
            </pre>
          </div>
        </div>
      </DisclosureContent>
    </Disclosure>
  );
}
