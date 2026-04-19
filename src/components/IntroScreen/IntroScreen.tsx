import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './IntroScreen.module.css'

const FULL_NAME = 'Victor Tavares'

interface IntroScreenProps {
  onEnter: () => void
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [displayedName, setDisplayedName] = useState('')
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    let i = 0
    const typingDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedName(FULL_NAME.slice(0, i + 1))
        i++
        if (i === FULL_NAME.length) {
          clearInterval(interval)
          setTimeout(() => setShowSubtitle(true), 400)
          setTimeout(() => setShowButton(true), 1100)
        }
      }, 90)
      return () => clearInterval(interval)
    }, 600)

    return () => clearTimeout(typingDelay)
  }, [])

  return (
    <div className={styles.root}>
      {/* Anéis concêntricos */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className={styles.ring}
          style={{
            width: `${i * 160}px`,
            height: `${i * 160}px`,
            opacity: 0.06 - i * 0.01,
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 3 + i * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <div className={styles.content}>
        {/* Nome com dactilografia */}
        <div className={styles.nameWrapper}>
          <span className={styles.name}>
            {displayedName}
            <motion.span
              className={styles.cursor}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            >
              _
            </motion.span>
          </span>
        </div>

        {/* Subtítulo */}
        <AnimatePresence>
          {showSubtitle && (
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              [DEV] SISTEMA ONLINE
            </motion.p>
          )}
        </AnimatePresence>

        {/* Botão ENTRAR */}
        <AnimatePresence>
          {showButton && (
            <motion.button
              className={styles.enterBtn}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onClick={onEnter}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className={styles.btnBorderTop} />
              <span className={styles.btnBorderRight} />
              <span className={styles.btnBorderBottom} />
              <span className={styles.btnBorderLeft} />
              ENTRAR
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
