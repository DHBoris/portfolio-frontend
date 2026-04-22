import { motion } from 'framer-motion';
import { person } from '@/data/portfolio';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4';

function IconArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.45 }}
        aria-hidden="true"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-20 h-full flex flex-col">
        <div className="w-full px-5 md:px-8 pt-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-8">
            <motion.p
              {...fadeUp(0.3)}
              className="text-white/60 text-sm max-w-xs leading-relaxed"
            >
              {person.tagline}
            </motion.p>
            <motion.p
              {...fadeUp(0.4)}
              className="text-white/60 text-sm lg:text-right leading-relaxed flex items-center gap-2 lg:justify-end"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              {person.status}
            </motion.p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-5 md:px-8 -mt-6">
          <motion.p
            {...fadeUp(0.1)}
            className="text-white/60 text-xs md:text-sm tracking-widest uppercase mb-5 md:mb-7 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-accent/40 inline-block" />
            {person.title}
            <span className="w-8 h-px bg-accent/40 inline-block" />
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-medium tracking-tighter"
            style={{ lineHeight: '0.85', fontSize: 'clamp(52px, 10vw, 148px)' }}
          >
            <span className="block text-white">{person.name.split(' ')[0]}</span>
            <span className="block shiny-text">{person.name.split(' ')[1]}.</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.35)}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 bg-accent hover:bg-[#45bef5] text-black rounded-full px-6 md:px-7 py-3 md:py-3.5 text-sm font-semibold transition-all duration-200"
            >
              Voir mes projets
              <IconArrow className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href={person.cv}
              download
              className="flex items-center gap-2.5 border border-white/20 hover:border-white/50 text-white/80 hover:text-white rounded-full px-6 md:px-7 py-3 md:py-3.5 text-sm font-medium transition-all duration-200 bg-white/5 backdrop-blur-sm"
            >
              <IconDownload />
              Télécharger CV
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2.5 border border-white/10 hover:border-white/30 text-white/50 hover:text-white/80 rounded-full px-6 md:px-7 py-3 md:py-3.5 text-sm font-medium transition-all duration-200"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center pb-8 opacity-40">
          <div className="flex flex-col items-center gap-2 animate-bounce-y">
            <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white/50"
              aria-hidden="true"
            >
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
