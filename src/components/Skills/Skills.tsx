import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Skills.module.css'

const SKILLS = [
  {
    name: 'React',
    color: '#61dafb',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="#61dafb">
        <circle r="2.05" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178c6',
    svg: (
      <svg viewBox="0 0 400 400" fill="none">
        <rect width="400" height="400" rx="10" fill="#3178c6" />
        <path d="M87.6 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5-.3-.3-31.7-.4-70-.4l-69.7.3v16.3zm230.2-17.1c12.2 3.4 21.3 9.5 29.4 19.8 4.3 5.7 10.7 16 11.2 18.5.1.7-20.1 14.2-32.4 21.8-.5.3-2.4-1.7-4.6-5-6.5-9.4-13.3-13.4-23.7-14.1-15.3-1-25.2 6.9-25.1 19.8 0 3.8.5 6 2.1 9 3.2 6.8 9.2 10.9 27.9 19.1 34.4 14.8 49.2 24.5 58.4 38.4 10.3 15.4 12.6 40.1 5.5 58.4-7.7 19.8-27 33.2-54 37.4-8.3 1.4-28.2 1.2-37.1-.4-19.5-3.5-38-13.3-49.3-26.1-4.3-4.9-12.7-18.1-12.2-19.1l4.9-3.1 19.5-11.2 15.1-8.7 3.2 4.7c4.5 6.9 14.3 16.4 20.2 19.5 17 8.8 40.4 7.6 52-2.5 5.2-4.6 7.4-9.4 7.4-16.6 0-6.4-.8-9.2-4.2-14-4.3-6-13.1-11-38-22-28.5-12.3-40.7-20-51.9-32.3-6.5-7.2-12.7-18.8-15.1-28.9-2.1-9-2.7-22.9-1.2-31.8 4.7-27.9 24.3-47.3 52.9-52.5 9-1.7 30.3-1 39.3 1.3z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776ab',
    svg: (
      <svg viewBox="0 0 256 255">
        <defs>
          <linearGradient id="py1" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py2" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
            <stop offset="0%" stopColor="#FFE052" />
            <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
        </defs>
        <path fill="url(#py1)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.79c6.079 0 11.008 4.928 11.008 11.007 0 6.079-4.929 11.008-11.008 11.008-6.079 0-11.007-4.929-11.007-11.008 0-6.079 4.928-11.007 11.007-11.007z" />
        <path fill="url(#py2)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.717c-6.079 0-11.008-4.929-11.008-11.008 0-6.079 4.929-11.007 11.008-11.007 6.079 0 11.007 4.928 11.007 11.007 0 6.079-4.928 11.008-11.007 11.008z" />
      </svg>
    ),
  },
  {
    name: 'Angular',
    color: '#dd0031',
    svg: (
      <svg viewBox="0 0 250 250" fill="#dd0031">
        <path d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z" />
        <path fill="#c3002f" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z" />
        <path fill="#fff" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    color: '#1572b6',
    svg: (
      <svg viewBox="0 0 452 520">
        <path fill="#1572b6" d="M41 460L0 0h452l-41 460-185 52z" />
        <path fill="#33a9dc" d="M226 472l149-41 35-396H226z" />
        <path fill="#fff" d="M226 208H94l5 58h127v-58zm0-114H82l5 58h139V94zm0 269l-124-34-8-92h59l4 45 69 19z" />
        <path fill="#ebebeb" d="M226 208v58h117l-11 122-106 29v61l148-41 11-116 12-113z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#f05032',
    svg: (
      <svg viewBox="0 0 92 92">
        <path fill="#f05032" d="M90.156 41.965L50.036 1.848a5.918 5.918 0 00-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 017.23 1.684 7.043 7.043 0 011.673 7.277l10.183 10.184a7.026 7.026 0 017.278 1.672 7.04 7.04 0 010 9.957 7.045 7.045 0 01-9.961 0 7.038 7.038 0 01-1.532-7.661l-9.5-9.499v24.997a7.04 7.04 0 011.86 1.25 7.04 7.04 0 010 9.958 7.04 7.04 0 01-9.957 0 7.04 7.04 0 010-9.958 7.06 7.06 0 012.304-1.539V33.926a7.049 7.049 0 01-2.304-1.535 7.05 7.05 0 01-1.508-7.692L29.23 14.273 1.734 41.77a5.918 5.918 0 000 8.371L41.855 90.26a5.92 5.92 0 008.368 0l39.933-39.929a5.925 5.925 0 000-8.366" />
      </svg>
    ),
  },
  {
    name: 'AI / ML',
    color: '#a855f7',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V6a4 4 0 014-4z" />
        <circle cx="9" cy="9" r="1" fill="#a855f7" stroke="none" />
        <circle cx="15" cy="9" r="1" fill="#a855f7" stroke="none" />
        <path d="M9 14s1 1.5 3 1.5 3-1.5 3-1.5" />
      </svg>
    ),
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.root} id="skills">
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className={styles.accent}>//</span> Skills
      </motion.h2>

      <div className={styles.grid}>
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            className={styles.hexWrap}
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
          >
            <div
              className={styles.hex}
              style={{ '--skill-color': skill.color } as React.CSSProperties}
            >
              <div className={styles.hexInner}>
                <div className={styles.logo}>{skill.svg}</div>
                <span className={styles.label}>{skill.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
