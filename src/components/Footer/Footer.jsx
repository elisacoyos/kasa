import React from 'react';
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
        <div >
            <img src='../src/assets/logo-black.png' alt="logo" width="80" />
                 
        </div>
        <div className='footer__text'>
            © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer