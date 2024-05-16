import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import WorkExp from './Components/WorkExperience/WorkExp'
import Link  from './Components/Link/Link'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    
    <Navbar />
    <div className='container'>

    <Hero/>
    <Skills/>
    <WorkExp/>
    <Link/>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default App
