import { TextEffect } from '@/components/core/text-effect';

export function TextEffectSpeed() {
  return (
    <TextEffect preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3}>
      让创意随动效跃然呈现。
    </TextEffect>
  );
}
