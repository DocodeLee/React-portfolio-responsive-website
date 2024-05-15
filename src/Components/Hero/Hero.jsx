import React from 'react'
import'./Hero.css'
import htmlimg from"./asset/html5.png"
import lee from "./asset/lee.jpg"
import reactimg from"./asset/react.png"
import cssimg from"./asset/css.png"
import pyimg from"./asset/python.jpg"
import jsimg from "./asset/js.png"



const Hero = () => {
  return (
   <section className='hero-container'>
    <div className='hero-content'>
        <h2> Building Digital Experience what you want</h2>
        <p>
            Passionate Full stack Developer | Transforming Ideas into the Business
            and Visually Stunning Web Site
        </p>
    </div>

    <div className='hero-img'>
        <div>
        
        <div className='leeimg'>
         <img className="lee"src={lee} alt=""/>
        </div>

        <div className='icons-under'>
        <div className='tech-icon'>
         <img className="html"src={htmlimg} alt=""/>
        </div>
        <div className='tech-icon'>
         <img className="react"src={reactimg} alt=""/>
        </div>
        <div className='tech-icon'>
         <img className="css"src={cssimg} alt=""/>
        </div> 
        <div className='tech-icon'>
         <img className="python"src={pyimg} alt=""/>
        </div>
        <div className='tech-icon'>
         <img className="jsicon"src={jsimg} alt=""/>
        </div>     
        </div>
      
        </div>
       
    </div>

   </section>
  )
}

export default Hero