import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import WorkExp from './Components/WorkExperience/WorkExp'
import Link  from './Components/Link/Link'

const App = () => {
  return (
    <>
    
    <Navbar />
    <div className='container'>

    <Hero/>
    <Skills/>
    <WorkExp/>
    <Link/>
    </div>
    
    </>
  )
}

export default App
