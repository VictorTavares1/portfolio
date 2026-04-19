import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Skills.module.css'

interface Skill {
  name: string
  color: string
  svg: React.ReactNode
}

interface Category {
  label: string
  skills: Skill[]
}

/* ── SVGs inline ── */
const ReactSvg = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="#61dafb">
    <circle r="2.05" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

const TypeScriptSvg = () => (
  <svg viewBox="0 0 400 400" fill="none">
    <rect width="400" height="400" rx="10" fill="#3178c6" />
    <path d="M87.6 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5-.3-.3-31.7-.4-70-.4l-69.7.3v16.3zm230.2-17.1c12.2 3.4 21.3 9.5 29.4 19.8 4.3 5.7 10.7 16 11.2 18.5.1.7-20.1 14.2-32.4 21.8-.5.3-2.4-1.7-4.6-5-6.5-9.4-13.3-13.4-23.7-14.1-15.3-1-25.2 6.9-25.1 19.8 0 3.8.5 6 2.1 9 3.2 6.8 9.2 10.9 27.9 19.1 34.4 14.8 49.2 24.5 58.4 38.4 10.3 15.4 12.6 40.1 5.5 58.4-7.7 19.8-27 33.2-54 37.4-8.3 1.4-28.2 1.2-37.1-.4-19.5-3.5-38-13.3-49.3-26.1-4.3-4.9-12.7-18.1-12.2-19.1l4.9-3.1 19.5-11.2 15.1-8.7 3.2 4.7c4.5 6.9 14.3 16.4 20.2 19.5 17 8.8 40.4 7.6 52-2.5 5.2-4.6 7.4-9.4 7.4-16.6 0-6.4-.8-9.2-4.2-14-4.3-6-13.1-11-38-22-28.5-12.3-40.7-20-51.9-32.3-6.5-7.2-12.7-18.8-15.1-28.9-2.1-9-2.7-22.9-1.2-31.8 4.7-27.9 24.3-47.3 52.9-52.5 9-1.7 30.3-1 39.3 1.3z" fill="#fff" />
  </svg>
)

const JavaScriptSvg = () => (
  <svg viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#f7df1e" />
    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.107V89.573h24.058v110.72c0 24.917-14.606 36.246-35.916 36.246-19.245 0-30.416-9.979-36.086-21.607M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.979 0 16.336-4.984 16.336-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.388-28.871-16.668-28.871-36.258 0-18.044 13.748-31.792 35.229-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.83-24.573" />
  </svg>
)

const HtmlSvg = () => (
  <svg viewBox="0 0 452 520">
    <path fill="#e34f26" d="M41 460L0 0h452l-41 460-185 52z" />
    <path fill="#ef652a" d="M226 472l149-41 35-396H226z" />
    <path fill="#fff" d="M226 208H94l5 58h127v-58zm0-114H82l5 58h139V94zm0 269l-124-34-8-92h59l4 45 69 19z" />
    <path fill="#ebebeb" d="M226 208v58h117l-11 122-106 29v61l148-41 11-116 12-113z" />
  </svg>
)

const CssSvg = () => (
  <svg viewBox="0 0 452 520">
    <path fill="#1572b6" d="M41 460L0 0h452l-41 460-185 52z" />
    <path fill="#33a9dc" d="M226 472l149-41 35-396H226z" />
    <path fill="#fff" d="M226 208H94l5 58h127v-58zm0-114H82l5 58h139V94zm0 269l-124-34-8-92h59l4 45 69 19z" />
    <path fill="#ebebeb" d="M226 208v58h117l-11 122-106 29v61l148-41 11-116 12-113z" />
  </svg>
)

const AngularSvg = () => (
  <svg viewBox="0 0 250 250">
    <path fill="#dd0031" d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z" />
    <path fill="#c3002f" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z" />
    <path fill="#fff" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z" />
  </svg>
)

const PythonSvg = () => (
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
)

const NodeSvg = () => (
  <svg viewBox="0 0 256 289">
    <path fill="#539e43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.98-2.65-3.975-1.06-4.57 7.42-2.518 8.48-3.18 15.9-7.42.795-.53 1.856-.265 2.65.265l27.032 16.099c1.06.53 2.385.53 3.18 0l105.74-61.086c1.06-.53 1.59-1.59 1.59-2.916V84.317c0-1.325-.53-2.385-1.59-2.916L128.663 20.45c-1.06-.53-2.385-.53-3.18 0L19.807 81.4c-1.06.53-1.59 1.856-1.59 2.916v121.907c0 1.06.53 2.385 1.59 2.916l28.887 16.76c15.635 7.95 25.44-1.325 25.44-10.6V95.712c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 3.18 1.325 3.18 3.18V215.3c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.864 0-24.38-6.625l-27.827-15.9C3.18 220.4 0 214.24 0 207.615V85.643c0-6.625 3.18-12.72 8.48-15.9L114.22 8.656c5.035-2.916 11.926-2.916 16.96 0l105.74 61.086c5.3 3.18 8.48 9.275 8.48 15.9V207.35c0 6.625-3.18 12.72-8.48 15.9L139.13 284.49c-3.18 1.856-7.155 2.916-11.13 2.916v.058z" />
    <path fill="#539e43" d="M161.87 205.759c-46.377 0-56.044-21.2-56.044-39.08 0-1.59 1.325-3.18 3.18-3.18h14.045c1.59 0 2.916 1.06 2.916 2.65 1.856 12.72 7.95 19.08 35.904 19.08 22.26 0 31.537-5.035 31.537-16.76 0-6.89-2.65-11.926-37.23-15.37-28.887-2.916-46.907-9.276-46.907-32.332 0-21.2 17.755-33.92 47.7-33.92 33.656 0 50.15 11.66 52.27 36.835.265.795-.265 1.59-.795 2.385-.53.53-1.325.795-2.12.795h-14.11c-1.325 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-32.33-19.345-23.85 0-26.5 8.215-26.5 14.44 0 7.42 3.18 9.54 36.04 13.78 32.86 4.24 48.23 10.335 48.23 33.655-.265 23.055-19.08 35.51-52.47 35.51l-.4-.758z" />
  </svg>
)

const OpenCVSvg = () => (
  <svg viewBox="0 0 100 100" fill="none">
    <circle cx="25" cy="50" r="20" fill="#5c3ee8" opacity="0.9" />
    <circle cx="75" cy="25" r="20" fill="#e8453c" opacity="0.9" />
    <circle cx="75" cy="75" r="20" fill="#00a652" opacity="0.9" />
    <text x="50" y="54" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="monospace">cv</text>
  </svg>
)

const TensorFlowSvg = () => (
  <svg viewBox="0 0 256 278">
    <path fill="#e55b2d" d="M0 156.12V46.08L128 0v46.08l-75.52 27.136V96.384L128 69.248v46.08l-75.52 27.136V178.24L0 156.12z" />
    <path fill="#ed8c2b" d="M128 69.248v46.08l75.52-27.136V46.08L256 68.032v221.952l-52.48-27.904V166.4l-75.52 27.136V147.2L256 120.064V68.032L128 69.248z" />
    <path fill="#e55b2d" d="M128 115.328v46.08l75.52-27.136v-46.08L128 115.328z" opacity=".6" />
  </svg>
)

const GitHubSvg = () => (
  <svg viewBox="0 0 24 24" fill="#f5f5f5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const GitSvg = () => (
  <svg viewBox="0 0 92 92">
    <path fill="#f05032" d="M90.156 41.965L50.036 1.848a5.918 5.918 0 00-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 017.23 1.684 7.043 7.043 0 011.673 7.277l10.183 10.184a7.026 7.026 0 017.278 1.672 7.04 7.04 0 010 9.957 7.045 7.045 0 01-9.961 0 7.038 7.038 0 01-1.532-7.661l-9.5-9.499v24.997a7.04 7.04 0 011.86 1.25 7.04 7.04 0 010 9.958 7.04 7.04 0 01-9.957 0 7.04 7.04 0 010-9.958 7.06 7.06 0 012.304-1.539V33.926a7.049 7.049 0 01-2.304-1.535 7.05 7.05 0 01-1.508-7.692L29.23 14.273 1.734 41.77a5.918 5.918 0 000 8.371L41.855 90.26a5.92 5.92 0 008.368 0l39.933-39.929a5.925 5.925 0 000-8.366" />
  </svg>
)

const DockerSvg = () => (
  <svg viewBox="0 0 256 190">
    <path fill="#2396ed" d="M250.716 73.8s-9.418-6.478-26.508-4.011c-1.742-13.518-10.208-25.316-10.208-25.316s-32.603 25.85-19.547 59.222c-4.958 2.76-15.713 5.455-29.88 5.162H1.458C-.46 124.41 2.567 153.474 19.32 174c15.999 19.636 40.225 27.836 71.4 27.836 58.014 0 108.24-26.1 139.148-73.627 21.61.435 47.84-5.616 60.848-26.1l3.316-5.358-43.316-22.95z" />
    <path fill="#2396ed" d="M78.386 74.485H52.227v24.44h26.159V74.485zm30.44 0H82.667v24.44h26.159V74.485zm30.44 0h-26.16v24.44h26.16V74.485zm30.45 0h-26.16v24.44h26.16V74.485zm-91.33-28.09H52.227v24.44h26.159V46.395zm30.44 0H82.667v24.44h26.159V46.395zm30.44 0h-26.16v24.44h26.16V46.395zm30.45 0h-26.16v24.44h26.16V46.395zm-60.89-28.09H82.667v24.44h26.159V18.305z" />
  </svg>
)

const FigmaSvg = () => (
  <svg viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5A9.5 9.5 0 1028.5 19 9.5 9.5 0 0019 28.5z" fill="#1abcfe" />
    <path d="M9.5 47.5A9.5 9.5 0 0019 57V38H9.5a9.5 9.5 0 000 19z" fill="#0acf83" />
    <path d="M9.5 28.5H19V9.5H9.5a9.5 9.5 0 000 19z" fill="#ff7262" />
    <path d="M9.5 9.5H19A9.5 9.5 0 109.5 9.5z" fill="#f24e1e" />
    <path d="M28.5 28.5A9.5 9.5 0 1019 19v19a9.5 9.5 0 009.5-9.5z" fill="#a259ff" />
  </svg>
)

const AiSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="8" height="8" rx="2" />
    <rect x="14" y="2" width="8" height="8" rx="2" />
    <rect x="2" y="14" width="8" height="8" rx="2" />
    <path d="M14 18h8M18 14v8" />
    <path d="M6 12v2M12 6h2" />
    <circle cx="6" cy="6" r="1.5" fill="#a855f7" stroke="none" />
  </svg>
)

const CATEGORIES: Category[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React',      color: '#61dafb', svg: <ReactSvg /> },
      { name: 'TypeScript', color: '#3178c6', svg: <TypeScriptSvg /> },
      { name: 'JavaScript', color: '#f7df1e', svg: <JavaScriptSvg /> },
      { name: 'Angular',    color: '#dd0031', svg: <AngularSvg /> },
      { name: 'HTML',       color: '#e34f26', svg: <HtmlSvg /> },
      { name: 'CSS',        color: '#1572b6', svg: <CssSvg /> },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Python',  color: '#3776ab', svg: <PythonSvg /> },
      { name: 'Node.js', color: '#539e43', svg: <NodeSvg /> },
    ],
  },
  {
    label: 'IA & Visão',
    skills: [
      { name: 'TensorFlow', color: '#ff6f00', svg: <TensorFlowSvg /> },
      { name: 'OpenCV',     color: '#5c3ee8', svg: <OpenCVSvg /> },
      { name: 'AI / ML',    color: '#a855f7', svg: <AiSvg /> },
    ],
  },
  {
    label: 'Ferramentas',
    skills: [
      { name: 'Git',    color: '#f05032', svg: <GitSvg /> },
      { name: 'GitHub', color: '#e0e0e0', svg: <GitHubSvg /> },
      { name: 'Docker', color: '#2396ed', svg: <DockerSvg /> },
      { name: 'Figma',  color: '#a259ff', svg: <FigmaSvg /> },
    ],
  },
]

function HexCard({ skill, delay, inView }: { skill: Skill; delay: number; inView: boolean }) {
  return (
    <motion.div
      className={styles.hexWrap}
      initial={{ opacity: 0, y: 35, scale: 0.82 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      <div
        className={styles.hex}
        style={{ '--skill-color': skill.color } as React.CSSProperties}
      >
        <div className={styles.glow} />
        <div className={styles.hexInner}>
          <div className={styles.logo}>{skill.svg}</div>
          <span className={styles.label}>{skill.name}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  let globalIndex = 0

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

      <div className={styles.categories}>
        {CATEGORIES.map((cat, ci) => {
          const catStart = globalIndex
          globalIndex += cat.skills.length
          return (
            <div key={cat.label} className={styles.category}>
              <motion.p
                className={styles.catLabel}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + ci * 0.08, ease: 'easeOut' }}
              >
                <span className={styles.catBracket}>[</span>
                {cat.label}
                <span className={styles.catBracket}>]</span>
              </motion.p>
              <div className={styles.grid}>
                {cat.skills.map((skill, si) => (
                  <HexCard
                    key={skill.name}
                    skill={skill}
                    delay={0.15 + (catStart + si) * 0.055}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
