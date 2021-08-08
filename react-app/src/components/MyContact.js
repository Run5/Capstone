import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div className='page-container'>
      <img src={'https://s1.pearlcdn.com/NAEU/contents/img/portal/gameinfo/feature_section02.jpg'} alt="notfound" />
      <div className='contact-container'>
        <h1 className='contact-title'>Contact Me</h1>
        <ul className='contact-list'>
          <li>chase.brashear@gmail.com</li>
          <li className='contact-link' onClick={()=> window.open("https://github.com/Run5", "_blank")}>View my Github</li>
          <li className='contact-link' onClick={()=> window.open("https://www.linkedin.com/in/chase-brashear-a05724163/", "_blank")}>View my Linkedin</li>
        </ul>
      </div>
    </div>
  )
}
