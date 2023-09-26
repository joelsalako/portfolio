import React from 'react'
import './about.css';
import MYPIC from '../../assets/mypic.jpg';
import {FaAward} from 'react-icons/fa';
import {HiAcademicCap} from 'react-icons/hi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MYPIC} alt="About_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <HiAcademicCap className='about__icon' />
              <h5>Trainings</h5>
              <small>50+ Completed</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>          
          <p>
            Highly motivated and detail-oriented Web Developer with a passion for creating user-friendly and visually appealing websites and applications. Proficient in various programming languages, frameworks, and CI/CD tools. Committed to continuous learning and staying up-to-date with the latest web development trends. Eager to contribute technical expertise and creativity to drive meaningful results.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About