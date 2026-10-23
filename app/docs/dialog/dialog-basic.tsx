import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/core/dialog';

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger className='bg-zinc-950 px-4 py-2 text-sm text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'>
        加入候补名单
      </DialogTrigger>
      <DialogContent className='w-full max-w-md bg-white p-6 dark:bg-zinc-900'>
        <DialogHeader>
          <DialogTitle className='text-zinc-900 dark:text-white'>
            加入候补名单
          </DialogTitle>
          <DialogDescription className='text-zinc-600 dark:text-zinc-400'>
            留下邮箱，获取产品上线通知。
          </DialogDescription>
        </DialogHeader>
        <div className='mt-6 flex flex-col space-y-4'>
          <label htmlFor='name' className='sr-only'>
            邮箱
          </label>
          <input
            id='name'
            type='email'
            className='h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-hidden focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm'
            placeholder='Enter your email'
          />
          <button
            className='inline-flex items-center justify-center self-end rounded-lg bg-black px-4 py-2 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900'
            type='submit'
          >
            立即加入
          </button>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
