import { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'

function App() {
  const [intro, setIntro] = useState(true)

  if (intro) {
    return <IntroScreen onEnter={() => setIntro(false)} />
  }

  return (
    <main style={{ background: '#050505', minHeight: '100vh', color: '#f5f5f5' }}>
      {/* portfólio — próximas secções aqui */}
    </main>
  )
}

export default App
