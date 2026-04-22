import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skills } from '@/data/portfolio';
import type { SkillCategory } from '@/types';

function SkillCard({ category, delay }: { category: SkillCategory; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="border border-white/[0.08] rounded-2xl p-7 bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] h-full">
        <h3 className="text-white font-semibold mb-5 text-base">{category.title}</h3>
        <ul className="space-y-3" role="list">
          {category.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-white/55 text-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-8" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Expertise"
          heading={
            <>
              Mes <span className="shiny-text">compétences.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((category, i) => (
            <SkillCard key={category.title} category={category} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
