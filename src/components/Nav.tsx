import { useState } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { person, navLinks } from '@/data/portfolio';

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 text-white no-underline">
      <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center flex-shrink-0 bg-white/5">
        <span className="text-xs font-semibold tracking-widest">BD</span>
      </div>
      <span className="text-sm font-medium tracking-wider text-white/90">Boris Dhaene</span>
    </a>
  );
}

function NavLinks({ mobile = false, onClose }: { mobile?: boolean; onClose?: () => void }) {
  const base = mobile
    ? 'block py-2.5 px-5 border-b border-white/5 text-white/70 hover:text-white transition-colors duration-200 text-sm'
    : 'text-white/70 hover:text-white transition-colors duration-200 text-sm whitespace-nowrap';

  return (
    <>
      {navLinks.map((link) => (
        <a key={link.label} href={link.href} className={base} onClick={onClose}>
          {link.label}
        </a>
      ))}
      <a
        href="#contact"
        onClick={onClose}
        className={`flex items-center gap-1.5 text-accent hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap ${mobile ? 'px-5 pt-3' : ''}`}
      >
        Me contacter
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  const navBg = scrolled
    ? 'bg-black/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <Logo />

          <div className="hidden lg:flex items-center gap-5 border border-white/10 rounded-full px-6 py-2.5 bg-white/5 backdrop-blur-sm">
            <NavLinks />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
          </div>

          <button
            className="lg:hidden p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className="text-white"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M4 4l14 14M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h16M3 11h16M3 16h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-5 pb-4">
          <div className="border border-white/10 rounded-2xl bg-black/90 backdrop-blur-sm py-2">
            <NavLinks mobile onClose={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}
