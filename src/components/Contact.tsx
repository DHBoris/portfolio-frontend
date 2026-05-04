import { useState } from 'react';
import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { person } from '@/data/portfolio';
import type { ContactFormData } from '@/types';

const contactSchema = z.object({
  name: z.string().min(1, 'Requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Minimum 10 caractères'),
});

const CONTACT_LINKS = [
  {
    label: 'Email',
    display: person.email,
    href: `mailto:${person.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/borisdhaene',
    href: person.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    display: 'github.com/borisdhaene',
    href: person.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

function InputField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-white/30 text-xs tracking-widest uppercase block mb-2"
      >
        {label}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormData) {
    setServerError('');
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: data.name,
        email: data.email,
        message: data.message,
      }).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setServerError('Une erreur est survenue. Réessayez plus tard.');
    }
  }

  if (sent) {
    return (
      <div className="border border-emerald-500/20 rounded-2xl p-10 bg-emerald-500/5 text-center">
        <svg
          className="w-10 h-10 text-emerald-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <h3 className="text-white font-semibold text-xl mb-2">Message envoyé !</h3>
        <p className="text-white/50 text-sm">Je vous répondrai dans les plus brefs délais.</p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-base md:text-sm placeholder-white/20 outline-none transition-colors ${
      hasError ? 'border-red-500/50' : 'border-white/10 focus:border-accent/40'
    }`;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-white/[0.08] rounded-2xl p-7 md:p-8 bg-white/[0.02] flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <InputField id="contact-name" label="Nom complet" error={errors.name?.message}>
        <input
          id="contact-name"
          type="text"
          placeholder="Jean Dupont"
          className={inputClass(!!errors.name)}
          {...register('name')}
        />
      </InputField>

      <InputField id="contact-email" label="Email" error={errors.email?.message}>
        <input
          id="contact-email"
          type="email"
          placeholder="jean@entreprise.com"
          className={inputClass(!!errors.email)}
          {...register('email')}
        />
      </InputField>

      <InputField id="contact-message" label="Message" error={errors.message?.message}>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Bonjour Boris, je serais intéressé par..."
          className={`${inputClass(!!errors.message)} resize-none`}
          {...register('message')}
        />
      </InputField>

      {serverError && <p className="text-red-400 text-sm text-center">{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex items-center justify-center gap-2.5 bg-accent hover:bg-[#45bef5] disabled:opacity-60 disabled:cursor-not-allowed text-black rounded-full py-3.5 text-sm font-semibold transition-all duration-200 mt-1"
      >
        {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
        {!isSubmitting && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-1"
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
        )}
      </button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <SectionHeader
              eyebrow="Prenons contact"
              heading={
                <>
                  Travaillons
                  <br />
                  <span className="shiny-text">ensemble.</span>
                </>
              }
              className="mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
              Ouvert aux projets freelance ainsi qu'aux opportunités d'emploi. N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-white/[0.08] rounded-xl px-5 py-4 bg-white/[0.02] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
                >
                  <span className="text-white/40 group-hover:text-accent transition-colors w-5 flex items-center justify-center">
                    {link.icon}
                  </span>
                  <div>
                    <div className="text-white/30 text-xs tracking-wider uppercase mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-white/70 text-sm group-hover:text-white transition-colors">
                      {link.display}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
