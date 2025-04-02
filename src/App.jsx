import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Project/>
      <Experience/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default App
