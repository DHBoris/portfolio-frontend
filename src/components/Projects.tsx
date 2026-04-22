import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects, person } from '@/data/portfolio';
import type { Project } from '@/types';

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

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { title, desc, tags, color, accent, status, demo, repo } = project;

  return (
    <FadeIn delay={delay}>
      <article
        className={`border border-white/[0.08] rounded-2xl overflow-hidden bg-gradient-to-br ${color} backdrop-blur-sm group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(100,206,251,0.08)]`}
      >
        <div
          className="h-40 md:h-48 relative flex items-center justify-center"
          style={{ background: `radial-gradient(ellipse at center, ${accent}18 0%, transparent 70%)` }}
        >
          <div className="text-6xl font-black tracking-tighter opacity-10 text-white select-none">
            {title.charAt(0)}
          </div>

          <div className="absolute top-4 right-4">
            <StatusPill status={status} />
          </div>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 text-white/20 group-hover:text-white/60 transition-colors"
            aria-label={`Voir ${title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div className="p-6">
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-1">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-xs tracking-wider uppercase hover:text-white transition-colors"
            >
              Demo →
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 text-xs tracking-wider uppercase hover:text-white/70 transition-colors"
            >
              Code →
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
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
            <ProjectCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>

        <FadeIn className="text-center mt-10">
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/15 hover:border-accent/50 text-white/60 hover:text-accent rounded-full px-6 py-3 text-sm font-medium transition-all duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Voir tous les projets sur GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
