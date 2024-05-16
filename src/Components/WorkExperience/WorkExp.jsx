import React, { useRef } from 'react'
import'./WorkExp.css'
import ExpCard from './ExpCard/ExpCard'
import {WORK_EXPERIENCE} from "../../utills/data";
import Slider from "react-slick";
const WorkExp = () => {
  const sliderRef =useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
    responsive:[
      { breakpoint: 769,
      settings:{
        slideToShow: 1,
        slideToScroll: 1,

      },
    },
    ],
  };
  const slideRight = () =>{
    sliderRef.current.slickNext();
  };
  const slideLeft = ()=>{
    sliderRef.current.slickPrev();
  }
  return (
    <section className='experience-container'>
        <h5>
            Work Experience
        </h5>
        <div className='experience-content'>
          <div className='arrow-right' onClick={slideRight}>
          <span className="material-symbols-outlined">»</span>
          </div>
          <div className='arrow-left' onClick={slideLeft}>
            <span className='material-symbols-outlined'>«</span>
          </div>
          <Slider ref={sliderRef} {...settings}>
            
        {WORK_EXPERIENCE.map((item)=>(
          <ExpCard key={item.title} details={item}/>
        ))}
        </Slider>
        </div>
       
    </section>
  )
}

export default WorkExp