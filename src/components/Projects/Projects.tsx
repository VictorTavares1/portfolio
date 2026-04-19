import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS, type Project, type Category } from './projects.data'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

const FILTERS: Array<'Todos' | Category> = ['Todos', 'Frontend', 'IA', 'Backend']

function ProjectCard({
  project,
  index,
  inView,
  onClick,
}: {
  project: Project
  index: number
  inView: boolean
  onClick: () => void
}) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
      onClick={onClick}
    >
      {/* fundo gradiente */}
      <div className={styles.cardBg} style={{ background: project.gradient }} />

      {/* overlay escuro padrão */}
      <div className={styles.cardOverlay} />

      {/* overlay de hover que sobe com o conteúdo */}
      <div className={styles.hoverLayer}>
        <span className={styles.hoverCategory}>{project.category}</span>
        <h3 className={styles.hoverTitle}>{project.title}</h3>

        <div className={styles.hoverTags}>
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className={styles.hoverTag}>{t}</span>
          ))}
        </div>

        <div className={styles.hoverLinks} onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Ver ao vivo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          )}
          <button className={styles.detailBtn}>Ver detalhes →</button>
        </div>
      </div>

      {/* título sempre visível */}
      <div className={styles.cardFooter}>
        <span className={styles.footerCategory}>{project.category}</span>
        <span className={styles.footerTitle}>{project.title}</span>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState<'Todos' | Category>('Todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section ref={ref} className={styles.root} id="projetos">
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className={styles.accent}>//</span> Projetos
      </motion.h2>

      {/* Filtros */}
      <motion.div
        className={styles.filters}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.pill} ${activeFilter === f ? styles.pillActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Grelha */}
      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            inView={inView}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
