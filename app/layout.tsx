import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';
import { TooltipProvider } from '@/components/ui/tooltip';
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL('https://xibianyue2020.github.io/motion-shelf/'),
  title: 'Motion Shelf · 视频特效与动效组件库',
  description: '视频特效素材与 33 个动效组件、96 个交互示例。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh-CN' suppressHydrationWarning>
      <body
        className={`${geistMono.variable} bg-white font-sans antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
          <TooltipProvider>
            <div className='isolate min-h-screen'>{children}</div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
