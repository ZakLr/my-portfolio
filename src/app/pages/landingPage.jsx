import React from 'react'
import Hero1 from '../components/heros/Hero1'
import HeroHeader8 from '../components/Hero'
import Navigation1 from '../components/Navbar'
import NewHero from '../components/heros/Hero2'
import Skills from '../components/Skills'
import Skills2 from '../components/Skills2'
import AboutMe from '../components/about'
import Hero3 from '../components/heros/Hero3'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div>
      <Navigation1 />
      <HeroHeader8 />
      <AboutMe  />
      <Skills2 />
      <Projects />
      <Footer />
    </div>
  )
}

export default LandingPage
