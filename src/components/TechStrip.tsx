import { FadeIn } from '@/components/ui/FadeIn';
import { techs } from '@/data/portfolio';

function TechBadge({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group flex items-center gap-2 border border-white/[0.08] rounded-full px-4 py-2 bg-white/[0.03] cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10 hover:border-accent/20">
      <span className="text-sm" aria-hidden="true">
        {icon}
      </span>
      <span className="text-white/70 text-xs font-medium tracking-wide group-hover:text-white/90 transition-colors">
        {name}
      </span>
    </div>
  );
}

export function TechStrip() {
  return (
    <section className="bg-black border-t border-b border-white/5 py-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-white/30 text-xs tracking-widest uppercase text-center mb-7">
            Stack technique
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((tech) => (
              <TechBadge key={tech.name} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
