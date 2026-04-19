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
    role: 'Estagiário — Software Developer',
    company: 'Near Partner',
    period: 'Jun 2025 — Jul 2025',
    location: 'Portugal',
    highlights: [
      'Desenvolvi uma funcionalidade nova num sistema interno já existente da empresa',
      'Utilizei Git/GitHub no fluxo de trabalho diário em contexto de equipa real',
      'Participei em tarefas de desenvolvimento e testes de software',
      'Adquiri experiência prática em metodologias de trabalho empresariais',
    ],
    tags: ['Git', 'GitHub', 'Desenvolvimento Web'],
  },
  {
    id: 2,
    role: 'Estudante — Projeto de Fim de Curso (PAP)',
    company: 'ESSA — Escola Secundária de Santo André',
    period: '2024 — 2025',
    location: 'Barreiro, Portugal',
    highlights: [
      'Desenvolvi o Roomly, aplicação web completa de gestão de salas escolares',
      'Dashboard com gráficos e calendário interativo para monitorização em tempo real',
      'Sistema de tickets de manutenção com autenticação multi-role (Admin, Funcionário, Professor)',
      'Stack completa: React 19 + Vite + Tailwind CSS + PHP + MySQL + REST API',
    ],
    tags: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 3,
    role: 'Estudante de Programação',
    company: 'ESSA — Escola Secundária de Santo André',
    period: '2023 — 2026',
    location: 'Barreiro, Portugal',
    highlights: [
      'Curso Técnico de Gestão e Programação de Sistemas Informáticos',
      'Aprendizagem de HTML5, CSS3, JavaScript, PHP, MySQL e Python',
      'Exploração de OutSystems (Low Code) e Microsoft Azure',
      'Desenvolvimento de projetos práticos em contexto académico e pessoal',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Python'],
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
