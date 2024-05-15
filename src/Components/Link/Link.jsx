import React, { useRef } from 'react'
import'./Link.css'
import todoimg from './asset/todo.PNG'
import nasaimg from'./asset/nasa.PNG'
import tranimg from './asset/translaion.PNG'

import Slider from "react-slick";


const Link = () => {
    const sliderRef =useRef();

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive:[
        { breakpoint: 769,
        settings:{
          slideToShow: 1,
          slideToScroll: 1,
  
        },
      },
      ],
    }
  return (
   <section className='link-container'>
        <h5>
        Link & Image
    </h5>
        
 
       <Slider ref={sliderRef} {...settings}>


    <div className='link-box' >
    <div className='link-content'>
    <a href="https://traininghelper.netlify.app/">Gym APP</a>
    <h2 className='explain'>
     Maxmize your<br/> Potential/Efficieny<br/> With this Gym App
    </h2>
   <img className="sample-img" src={todoimg} alt="" />
    </div>
    </div>

    <div className='link-box' >
    <div className='link-content'>
    <a href="https://nasaapiimg.netlify.app/">NASA API</a>
    <h2 className='explain'>
      In here you can enjoy <br/> NASA API EVERYDAY
    </h2>
    <img className="sample-img" src={nasaimg} alt="" />
    </div>
    </div>

    <div className='link-box' >
    <div className='link-content'>
    <a href="https://transcriptengtoothers.netlify.app/">Free Translation</a>
    <h2 className='explain'>
      From Eng, You can <br/> translate and transcribe<br/> Which Language You want 
    </h2>
    <img className="sample-img" src={tranimg} alt="" />
    </div>
    </div>
  
       
   </Slider>
       
   </section>
  )
}

export default Link