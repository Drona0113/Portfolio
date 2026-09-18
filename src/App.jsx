import React from 'react'
import Navbar from './components/NavBar'
import PageTransition from './components/PageTransition'
import PageReveal from './components/PageReveal'
import { useEffect } from 'react'


import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Activity from './sections/Activity'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {

  useEffect(() => {
  window.history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)
}, [])

  return (
    <div id="home">

      {/* Opening manga transition */}
      <PageTransition />

      <Navbar />

      {/* PAGE 001 */}
      <Hero />

      <div className="page-turn-edge" />

      {/* PAGE 002 */}
      <div className="manga-scene">
        <PageReveal direction="left">
          <About />
        </PageReveal>
      </div>

      <div className="page-turn-edge" />

      {/* PAGE 003 */}
      <div className="manga-scene">
        <PageReveal direction="right">
          <Skills />
        </PageReveal>
      </div>

      <div className="page-turn-edge" />

      {/* PAGE 004 */}
      <div className="manga-scene">
        <PageReveal direction="left">
          <Projects />
        </PageReveal>
      </div>

      <div className="page-turn-edge" />

      {/* PAGE 005 */}
      <div className="manga-scene">
        <PageReveal direction="right">
          <Activity />
        </PageReveal>
      </div>

      <div className="page-turn-edge" />

      {/* PAGE 006 */}
      <div className="manga-scene">
        <PageReveal direction="left">
          <Contact />
        </PageReveal>
      </div>

      <Footer />

    </div>
  )
}

export default App