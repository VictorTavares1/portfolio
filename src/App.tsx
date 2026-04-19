import { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'
import Hero from './components/Hero/Hero'

function App() {
  const [intro, setIntro] = useState(true)

  if (intro) {
    return <IntroScreen onEnter={() => setIntro(false)} />
  }

  return (
    <main style={{ background: '#050505' }}>
      <Hero />
      {/* próximas secções aqui */}
    </main>
  )
}

export default App
