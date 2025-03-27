import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skill from './components/Skill'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Skill/>
    </div>
  )
}

export default App
