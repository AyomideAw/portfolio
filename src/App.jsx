import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Project/>
      <Experience/>
      <Skill/>
      <Contact/>
      <Footer/>
      <ScrollToTop smooth color='white' style={{backgroundColor: '#3BB2F6', display:'flex', alignItems: 'center', justifyContent: 'center'}}/>
    </div>
  )
}

export default App
