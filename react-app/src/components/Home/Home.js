import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


export default function Home() {

  return (
    <div>
      <video id="videoTag" muted="muted" preload="none" loop="loop" data-resize="true" autoplay="">
        <source class="webmSrc" type="video/webm" src="https://s1.pearlcdn.com/global_static/video/bdc_sand_loop.webm" />
        <source class="mp4Src" type="video/mp4" src="https://s1.pearlcdn.com/global_static/video/bdc_sand_loop.mp4" />
      </video>
      <div className='homepage-container'>
        <h1>This is my home page</h1>
        <div>
          <NavLink to='/create-character' exact={true} activeClassName='active'>Create Character</NavLink>
          <NavLink to='/grind-sessions' exact={true} activeClassName='active'>Register Grind Session</NavLink>
        </div>
      </div>
    </div>
  )
}
