import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Splash() {

  return (
    <div className='page-container'>
      <video id="videoTag" muted="muted" preload="none" loop="loop" data-resize="true" autoplay="">
        <source className="webmSrc" type="video/webm" src="https://s1.pearlcdn.com/global_static/video/bdc_sand_loop.webm" />
        <source className="mp4Src" type="video/mp4" src="https://s1.pearlcdn.com/global_static/video/bdc_sand_loop.mp4" />
      </video>
      <div className='homepage-container'>
        <h1 className='home-page-title'>Modest Grind Sessions</h1>
        <NavLink to='/grind-sessions/all' exact={true} activeClassName='active' className='large-button'><span>Register Grind Session </span></NavLink>
      </div>
    </div>
  )
}
