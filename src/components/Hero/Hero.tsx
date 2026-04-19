import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './Hero.module.css'

const TAGS = ['Developer', 'AI Enthusiast', 'Computer Vision']

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? 55 : 90
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

const ORBS = [
  { color: '#a855f7', size: 520, x: '10%',  y: '15%',  blur: 120, duration: 9  },
  { color: '#06b6d4', size: 400, x: '70%',  y: '60%',  blur: 100, duration: 11 },
  { color: '#ec4899', size: 340, x: '80%',  y: '10%',  blur: 90,  duration: 13 },
  { color: '#14b8a6', size: 300, x: '20%',  y: '75%',  blur: 80,  duration: 10 },
]

export default function Hero() {
  const tag = useTypewriter(TAGS)
  const cursorRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const springX = useSpring(rawX, { stiffness: 180, damping: 18 })
  const springY = useSpring(rawY, { stiffness: 180, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [rawX, rawY])

  return (
    <section className={styles.root}>
      {/* Cursor personalizado */}
      <motion.div
        ref={cursorRef}
        className={styles.cursor}
        style={{ x: springX, y: springY }}
      />

      {/* Orbs atmosféricos */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={styles.orb}
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            left: orb.x,
            top: orb.y,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{ y: [0, -30, 0], x: [0, 18, 0] }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Conteúdo */}
      <div className={styles.content}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Victor Tavares
        </motion.h1>

        <motion.div
          className={styles.tagLine}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <span className={styles.tagBracket}>&lt;</span>
          <span className={styles.tagText}>{tag}</span>
          <motion.span
            className={styles.tagCursor}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            |
          </motion.span>
          <span className={styles.tagBracket}>/&gt;</span>
        </motion.div>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <button className={styles.ctaBtn}>
            <span className={styles.ctaInner}>Ver Projetos</span>
          </button>
          <button className={`${styles.ctaBtn} ${styles.ctaGhost}`}>
            <span className={styles.ctaInner}>Contacto</span>
          </button>
        </motion.div>
      </div>

      {/* Seta scroll */}
      <motion.div
        className={styles.scrollArrow}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
