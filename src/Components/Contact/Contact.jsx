import React from 'react'
import './Contact.css'
import mailimg from './asset/mail.png'
import gitimg from './asset/git.png'
import ContactForm from './ContactForm/ContactForm'




const Contact = () => {
  return (
    <section className='contact-container'>
<h5>Contact Me</h5>

<div className='contact-content'>
<div style={{flex: 1}}>
<div className='contact-details-card'>
   <img  className="icon" src={mailimg}/>
    <p>www.leavingbird1998@gmail.com</p>
  </div>
        <div className='contact-details-card'>
        <img className="icon"  src={gitimg}/>
        <p>https://github.com/DocodeLee</p> 
        </div>
  </div>

    <div style={{flex: 1}}>
      <ContactForm/>
    </div>
    </div>
    </section>
  )
}

export default Contact