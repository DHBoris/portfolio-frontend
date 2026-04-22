import { Logo } from '@/components/Nav';
import { person } from '@/data/portfolio';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: person.github },
  { label: 'LinkedIn', href: person.linkedin },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />

        <p className="text-white/20 text-xs tracking-wider text-center">
          © {new Date().getFullYear()} Boris Dhaene — Full Stack Web Developer
        </p>

        <nav className="flex items-center gap-5" aria-label="Réseaux sociaux">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 text-xs tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
