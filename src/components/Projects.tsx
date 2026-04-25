import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects, person } from '@/data/portfolio';
import type { Project } from '@/types';

type ImageEntry = { src: string; contain: boolean };

function normalizeImages(images: Project['images']): ImageEntry[] {
  if (!images) return [];
  return images.map((img) =>
    typeof img === 'string' ? { src: img, contain: false } : { src: img.src, contain: img.contain ?? false }
  );
}

function StatusPill({ status }: { status: Project['status'] }) {
  const isLive = status === 'Live';
  return (
    <span
      className={`text-xs font-medium px-3 py-1 rounded-full border ${
        isLive
          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
          : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      }`}
    >
      {isLive ? '● Live' : '◌ En cours'}
    </span>
  );
}

function Carousel({ images, title }: { images: ImageEntry[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map(({ src, contain }, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} - vue ${i + 1}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${contain ? 'object-contain' : 'object-cover object-center'}`}
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? '16px' : '6px',
                height: '6px',
                background: i === activeIndex ? '#fff' : 'rgba(255,255,255,0.3)',
              }}
              aria-label={`Vue ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { title, desc, tags, accent, status, demo, repo, repoBack, images, color, server } = project;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const hasDemoLink = demo !== '#';
  const hasRepoLink = repo !== '#';
  const hasRepoBack = !!repoBack;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      <motion.div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        style={{ background: '#0a0a0a' }}
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all"
          aria-label="Fermer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left — carousel */}
          <div className={`relative md:w-[55%] h-56 md:h-auto min-h-[280px] bg-gradient-to-br ${color} flex-shrink-0`}>
            {images && images.length > 0 ? (
              <Carousel images={normalizeImages(images)} title={title} />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: `radial-gradient(ellipse at center, ${accent}20 0%, transparent 70%)` }}
              >
                <span className="text-8xl font-black tracking-tighter opacity-10 text-white select-none">
                  {title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Right — details */}
          <div className="flex flex-col p-7 md:p-8 flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h2 className="text-white font-semibold text-xl leading-tight">{title}</h2>
              <StatusPill status={status} />
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6">{desc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {server && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5865F2" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white/80 text-xs font-semibold truncate">{server.name}</p>
                  <p className="text-white/40 text-[11px] truncate">{server.game}</p>
                </div>
                <div className="ml-auto flex gap-3 text-[11px] flex-shrink-0">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {server.online.toLocaleString('fr-FR')} en ligne
                  </span>
                  <span className="text-white/35">{server.members.toLocaleString('fr-FR')} membres</span>
                </div>
              </div>
            )}

            <div className="mt-auto flex flex-wrap gap-3">
              {hasDemoLink && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200"
                  style={{ background: accent }}
                >
                  Voir le site
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
              {hasRepoLink && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-white/15 hover:border-white/30 text-white/60 hover:text-white transition-all duration-200"
                >
                  {hasRepoBack ? 'Front' : 'Code source'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              )}
              {hasRepoBack && (
                <a
                  href={repoBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-white/15 hover:border-white/30 text-white/60 hover:text-white transition-all duration-200"
                >
                  Back
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  delay,
  onClick,
}: {
  project: Project;
  delay: number;
  onClick: () => void;
}) {
  const { title, desc, tags, color, accent, status, images } = project;
  const normalizedImages = normalizeImages(images);

  return (
    <FadeIn delay={delay}>
      <article
        onClick={onClick}
        className={`cursor-pointer border border-white/[0.08] rounded-2xl overflow-hidden bg-gradient-to-br ${color} backdrop-blur-sm group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(100,206,251,0.08)]`}
      >
        <div
          className="h-52 md:h-60 relative flex items-center justify-center overflow-hidden"
          style={normalizedImages.length ? undefined : { background: `radial-gradient(ellipse at center, ${accent}18 0%, transparent 70%)` }}
        >
          {normalizedImages.length ? (
            <Carousel images={normalizedImages} title={title} />
          ) : (
            <div className="text-6xl font-black tracking-tighter opacity-10 text-white select-none">
              {title.charAt(0)}
            </div>
          )}

          <div className="absolute top-4 right-4">
            <StatusPill status={status} />
          </div>

          <div className="absolute bottom-4 right-4 text-white/20 group-hover:text-white/60 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h6v6M10 14L21 3M21 3v6M9 21H3v-6" />
            </svg>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{desc}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="bg-black py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Réalisations"
          heading={
            <>
              Mes <span className="shiny-text">projets.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 0.1}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>

        <FadeIn className="text-center mt-10">
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/15 hover:border-accent/50 text-white/60 hover:text-accent rounded-full px-6 py-3 text-sm font-medium transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Voir tous les projets sur GitHub
          </a>
        </FadeIn>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
