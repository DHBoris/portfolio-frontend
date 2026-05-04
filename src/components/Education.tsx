import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { education, person } from '@/data/portfolio';
import type { EducationItem } from '@/types';

function TimelineItem({ item, index, isLast }: { item: EducationItem; index: number; isLast: boolean }) {
  return (
    <FadeIn delay={index * 0.12}>
      <div className="relative flex gap-6 mb-10 pl-2">
        {!isLast && (
          <div
            className="absolute left-7 top-10 w-px"
            style={{
              height: 'calc(100% + 16px)',
              background: 'linear-gradient(to bottom, rgba(100,206,251,0.3), transparent)',
            }}
            aria-hidden="true"
          />
        )}

        <div className="flex-shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
        </div>

        <div className="pb-2">
          <span className="text-accent text-xs tracking-widest uppercase font-medium">
            {item.year}
          </span>
          <h3 className="text-white font-semibold text-lg mt-1 mb-0.5">{item.title}</h3>
          <p className="text-white/40 text-sm mb-3 font-medium">{item.org}</p>
          <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export function Education() {
  return (
    <section id="education" className="bg-black py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Parcours"
          heading={
            <>
              Mes <span className="shiny-text">formations.</span>
            </>
          }
        />

        <div className="max-w-2xl">
          {education.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={i}
              isLast={i === education.length - 1}
            />
          ))}
        </div>

        <FadeIn className="mt-4 flex flex-wrap gap-3">
          <a
            href={person.cvDev}
            download
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-full px-6 py-3.5 text-sm font-medium text-white/70 hover:text-white transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV Dev (PDF)
          </a>
          <a
            href={person.cvPolyvalent}
            download
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 rounded-full px-6 py-3.5 text-sm font-medium text-white/70 hover:text-white transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV Polyvalent (PDF)
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
