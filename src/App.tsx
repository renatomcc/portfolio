import { useEffect, useState } from 'react'
import './styles/App.sass'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { MobileNavbar } from './components/MobileNavbar'
import { Welcome } from './components/Welcome'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Links } from './components/Links'
import Aos from 'aos'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="App">

      <MobileNavbar />
      <Navbar />

      <Sidebar />
      <div className="container">
        <Welcome />
        <AboutMe />
        <Skills />
        <Projects />
        <Links />
      </div>
    </div>
  )
}

export default App
