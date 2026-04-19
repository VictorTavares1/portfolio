import { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'

function App() {
  const [intro, setIntro] = useState(true)

  if (intro) {
    return <IntroScreen onEnter={() => setIntro(false)} />
  }

  return (
    <main style={{ background: '#050505' }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* próximas secções aqui */}
    </main>
  )
}

export default App
