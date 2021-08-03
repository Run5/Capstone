import React from 'react';
import './Home.css';

export default function Splash() {

  return (
    <div>
      <h1>Modest</h1>
      <video id="videoTag" muted="muted" preload="none" loop="loop" data-resize="true" autoPlay="">
        <source className="webmSrc" type="video/webm" src="https://s1.pearlcdn.com/global_static/video/bdc_sand_loop.webm" />
        <source className="mp4Src" type="video/mp4" src="https://s1.pearlcdn.com/global_static/video/bdc_sand_loop.mp4" />
      </video>
    </div>
  )
}
