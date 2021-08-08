import React from 'react';
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className='page-container'>
      <img src={'https://s1.pearlcdn.com/NAEU/contents/img/portal/gameinfo/feature_section02.jpg'} alt="notfound" />
      <div className='notfound-container'>
        <h1 className='not-found'>404 Page Not Found</h1>
        <p>We're sorry the page you're looking for can not be found.</p>
      </div>
    </div>
  )
}
