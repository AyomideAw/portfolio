import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Project/>
    </div>
  )
}

export default App
