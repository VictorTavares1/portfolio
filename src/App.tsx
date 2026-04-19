import { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

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
      {/* próximas secções aqui */}
    </main>
  )
}

export default App
