import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import WorkExp from './Components/WorkExperience/WorkExp'

const App = () => {
  return (
    <>
    
    <Navbar />
    <div className='container'>

    <Hero/>
    <Skills/>
    <WorkExp/>
    </div>
    
    </>
  )
}

export default App
