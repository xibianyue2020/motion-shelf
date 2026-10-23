import Link from 'next/link';

export function Header() {
  return (
    <header className='shelf-header'>
      <div className='shelf-header-inner'>
        <Link href='/' className='shelf-brand'>
          <span className='shelf-brand-mark'>M</span>
          <span>Motion Shelf</span>
        </Link>
        <nav className='shelf-tabs' aria-label='主导航'>
          <Link href='/' className='shelf-tab'>视频特效</Link>
          <Link href='/components' className='shelf-tab'>动效组件库</Link>
        </nav>
      </div>
    </header>
  );
}
