import { Header } from '@/components/website/header';

export default function Home() {
  return (
    <main className='shelf-video-page'>
      <Header />
      <iframe
        className='shelf-video-frame'
        title='Motion Shelf 视频特效库'
        src='/motion-shelf/video-library/index.html'
      />
    </main>
  );
}
