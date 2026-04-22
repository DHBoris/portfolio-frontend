import type { ReactNode } from 'react';
import { FadeIn } from './FadeIn';

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  className?: string;
}

export function SectionHeader({ eyebrow, heading, className = 'mb-14' }: SectionHeaderProps) {
  return (
    <FadeIn className={className}>
      <p className="text-accent text-xs tracking-widest uppercase mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-accent/50" />
        {eyebrow}
      </p>
      <h2
        className="text-white font-medium tracking-tighter"
        style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: '0.9' }}
      >
        {heading}
      </h2>
    </FadeIn>
  );
}
