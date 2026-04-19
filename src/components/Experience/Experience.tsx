import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Experience.module.css'

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
  tags: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    role: 'Desenvolvedor Frontend',
    company: 'Empresa Placeholder A',
    period: '2024 — Presente',
    location: 'Lisboa, Portugal',
    highlights: [
      'Desenvolvimento de interfaces em React + TypeScript com foco em performance',
      'Integração com APIs REST e gestão de estado com Context API',
      'Implementação de design system e componentes reutilizáveis',
      'Code reviews e pair programming com equipa de 4 developers',
    ],
    tags: ['React', 'TypeScript', 'REST API'],
  },
  {
    id: 2,
    role: 'Desenvolvedor Full Stack (Estágio)',
    company: 'Empresa Placeholder B',
    period: '2023 — 2024',
    location: 'Remote',
    highlights: [
      'Construção de API REST em Node.js com autenticação JWT',
      'Frontend em Angular com integração de dashboards de dados',
      'Automatização de pipelines de testes com GitHub Actions',
    ],
    tags: ['Node.js', 'Angular', 'PostgreSQL'],
  },
  {
    id: 3,
    role: 'Investigador em Visão Computacional',
    company: 'Universidade Placeholder',
    period: '2022 — 2023',
    location: 'Porto, Portugal',
    highlights: [
      'Desenvolvimento de pipeline de deteção de objetos com YOLOv8 e OpenCV',
      'Treino de modelos CNN com TensorFlow em dataset personalizado',
      'Publicação de relatório técnico e apresentação de resultados',
    ],
    tags: ['Python', 'OpenCV', 'TensorFlow'],
  },
]

function TimelineCard({ item, index, inView }: { item: ExperienceItem; index: number; inView: boolean }) {
  const isLeft = index % 2 === 0

  return (
    <div className={styles.row}>
      {/* Ponto na linha */}
      <div className={styles.nodeCol}>
        <div className={styles.node}>
          <motion.div
            className={styles.pulse}
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          />
        </div>
      </div>

      {/* Cartão */}
      <motion.div
        className={`${styles.card} ${isLeft ? styles.cardLeft : styles.cardRight}`}
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Borda lateral colorida */}
        <div className={styles.cardAccent} />

        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
          </div>
          <div className={styles.meta}>
            <span className={styles.period}>{item.period}</span>
            <span className={styles.location}>{item.location}</span>
          </div>
        </div>

        <ul className={styles.highlights}>
          {item.highlights.map((h, i) => (
            <li key={i} className={styles.highlight}>
              <span className={styles.bullet}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className={styles.tags}>
          {item.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.root} id="experiencia">
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className={styles.accent}>//</span> Experiência
      </motion.h2>

      <div className={styles.timeline}>
        {/* linha vertical */}
        <motion.div
          className={styles.line}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
        />

        {EXPERIENCES.map((item, i) => (
          <TimelineCard key={item.id} item={item} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
