import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Skill/>
    </div>
  )
}

export default App
