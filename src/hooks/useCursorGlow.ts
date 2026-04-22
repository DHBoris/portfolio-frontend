import { useEffect } from 'react';

export function useCursorGlow(): void {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const onMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);
}
