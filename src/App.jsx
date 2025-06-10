import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SkillsAndTech from './components/SkillsAndTech'
import ShowCase from './components/ShowCase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <SkillsAndTech />
      <ShowCase />
    </>
  )
}

export default App
