import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpg';
//import IMG6 from '../../assets/portfolio6.jpg';

//DO NOT USE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Todo App (With React, SCSS, and Firebase)',
    github: 'https://github.com/joelsalako/todo-app/',
    demo: 'https://todo-app-five-gilt-87.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Social Media App (With React, SCSS, and Firebase)',
    github: 'https://github.com/joelsalako/social-media-app',
    demo: 'https://social-media-app-khaki.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Online Shoe Store (With JavaScript and Bootstrap)',
    github: 'https://github.com/joelsalako/online-shoe-store',
    demo: 'https://online-shoe-store-seven.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CrowdFund App (With React, Tailwind CSS, and Firebase)',
    github: 'https://github.com/joelsalako/crowdfund',
    demo: 'https://crowdfund-zeta.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Site (With React and CSS)',
    github: 'https://github.com/joelsalako/portfolio',
    demo: 'http://joelsalako.net'
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: '',
  //   github: 'https://github.com',
  //   demo: ''
  // }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel='noopener noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }               
      </div>
    </section>
  )
}

export default Portfolio