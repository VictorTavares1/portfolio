import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import styles from './About.module.css'

const STATS = [
  { label: 'Anos de Formação', value: 3, suffix: '+' },
  { label: 'Projetos Concluídos', value: 10, suffix: '+' },
  { label: 'Tecnologias', value: 15, suffix: '+' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className={styles.root} id="sobre">
      <motion.h2
        className={styles.sectionTitle}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        custom={0}
      >
        <span className={styles.accent}>//</span> Sobre Mim
      </motion.h2>

      <div className={styles.grid}>
        {/* Coluna esquerda — avatar */}
        <motion.div
          className={styles.avatarCol}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={1}
        >
          <div className={styles.avatarWrapper}>
            {/* Anel de brilho externo */}
            <motion.div
              className={styles.glowRing}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Anel de brilho interno (sentido contrário) */}
            <motion.div
              className={styles.glowRingInner}
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>VT</span>
            </div>
          </div>
        </motion.div>

        {/* Coluna direita — texto */}
        <div className={styles.textCol}>
          <motion.p
            className={styles.bio}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={2}
          >
            Estudante finalista do Curso Técnico de Gestão e Programação de Sistemas
            Informáticos, com experiência real em desenvolvimento web full-stack e contexto
            empresarial. Apaixonado por tecnologia e cada vez mais focado em Inteligência
            Artificial — acredito que o futuro do desenvolvimento está na intersecção entre
            software funcional e sistemas inteligentes.
          </motion.p>

          <motion.p
            className={styles.bio}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={3}
          >
            Orientado para aprender rápido, resolver problemas e contribuir desde o primeiro dia.
            Tenho experiência com React, PHP, MySQL, OutSystems e Python, e desenvolvi o projeto
            de fim de curso Roomly — uma aplicação web completa de gestão de salas escolares.
          </motion.p>

          {/* Contadores */}
          <motion.div
            className={styles.stats}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={4}
          >
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
