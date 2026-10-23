import { TextScramble } from '@/components/core/text-scramble';

export function TextScrambleCustomCharacterDuration() {
  return (
    <TextScramble
      className='font-mono text-sm'
      duration={1.2}
      characterSet='. '
    >
      正在生成界面…
    </TextScramble>
  );
}
