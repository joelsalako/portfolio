import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.facebook.com/salako.j.sunday/' target='_blank' rel='noopener noreferrer'><BsFacebook /></a>
        <a href='https://github.com/joelsalako?tab=repositories' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
        <a href='https://dribbble.com/salakojoel?onboarding=true' target='_blank' rel='noopener noreferrer'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials