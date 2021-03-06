import React from 'react';
import './About.css'

export default function About() {
  return (
    <div className='page-container'>
      <img src={'https://s1.pearlcdn.com/NAEU/contents/img/portal/gameinfo/feature_section02.jpg'} alt="notfound" />
      <div className='about-container'>
        <h1 className='about-title'>Modest Grind Sessions</h1>
        <p className='about-p'>
          Modest grind sessions was created to track your grind sessions in the MMO Black Desert Online.
          The objective of the game is to kill mobs for hours at a time and this site was created to help track the spoils from this.
          Users can create characters to more easily track their grind.
          Grind sessions can be tracked for any high-end grind location.
        </p>
      </div>
    </div>
  )
}
