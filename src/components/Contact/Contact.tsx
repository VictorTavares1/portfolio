import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Contact.module.css'

interface ContactCard {
  label: string
  handle: string
  href: string
  color: string
  icon: React.ReactNode
}

const CARDS: ContactCard[] = [
  {
    label: 'GitHub',
    handle: '@VictorTavares1',
    href: 'https://github.com/VictorTavares1',
    color: '#e0e0e0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'victortavares0112',
    href: 'https://linkedin.com/in/victortavares0112',
    color: '#0a66c2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'victortavares649@gmail.com',
    href: 'mailto:victortavares649@gmail.com',
    color: '#ea4335',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'Telefone',
    handle: '+351 933 322 644',
    href: 'tel:+351933322644',
    color: '#06b6d4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.root} id="contacto">
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className={styles.accent}>//</span> Contacto
      </motion.h2>

      {/* Frase de destaque */}
      <motion.div
        className={styles.headline}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        <p className={styles.headlineText}>
          Vamos construir algo{' '}
          <span className={styles.headlineAccent}>incrível</span> juntos
        </p>
        <p className={styles.headlineSub}>
          Disponível para projetos freelance, oportunidades de emprego e colaborações.
        </p>
      </motion.div>

      {/* Cartões */}
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <motion.a
            key={card.label}
            href={card.href}
            target={card.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={styles.card}
            style={{ '--card-color': card.color } as React.CSSProperties}
            {...(inView ? fadeUp(0.2 + i * 0.1) : { initial: { opacity: 0, y: 30 } })}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className={styles.cardGlow} />
            <div className={styles.iconWrap}>
              <div className={styles.icon}>{card.icon}</div>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardLabel}>{card.label}</span>
              <span className={styles.cardHandle}>{card.handle}</span>
            </div>
            <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Feito com React, TypeScript & Framer Motion — Victor Tavares © 2026
      </motion.p>
    </section>
  )
}
