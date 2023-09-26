import React from 'react'
import './header.css';
import CTA from './CTA';
import MYPIC from '../../assets/mypic.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">      
        <h5>Hello I'm</h5>
        <h1>Joel Salako</h1>
        <h5 className='text-light'>Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="mypic">
          <img src={MYPIC} alt='mypic' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>     
      </div>
    </header>
  )
}

export default Header