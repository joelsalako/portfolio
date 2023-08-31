import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avata1.jpg';
import AVTR2 from '../../assets/avata2.jpg';
import AVTR3 from '../../assets/avata3.jpg';
import AVTR4 from '../../assets/avata4.jpg';
import AVTR5 from '../../assets/avata5.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Ivan Maog',
    review: "Joel Salako is an exceptional team member who consistently approaches problems from multiple angles, seeks clarity before making decisions, and suggests the most beneficial routes for everyone involved. Joel's keen observation skills and thoroughness in gathering information ensure well-informed judgments, while his fearlessness and dedication lead to remarkable achievements. His professionalism, commitment to excellence, and unwavering contributions make him an invaluable asset to any team."    
  },
  {
    avatar: AVTR2,
    name: 'Luiz Frank',
    review: '"I was very pleased to work as a team with Joel because he demonstrated humility, experience, and thoughtfulness during our meetings and discussions about the Business project. He always shared doubts and suggestions with the team in a polite and objective manner. He was always mindful of the project\'s objectives and deadlines. Being able to rely on Joel\'s experience was very important for the team and the project, especially regarding marketing and finance plans. Having Joel as a team member is a considerable advantage"'
  },
  {
    avatar: AVTR3,
    name: 'Abdel-Ilah El Ghardaoui',
    review: "Joel's presence in my class was truly invaluable. His remarkable ability to learn quickly allows him to effortlessly grasp new information and adapt to complex concepts. I am continuously impressed by his aptitude for problem-solving, as he consistently finds innovative solutions to challenging situations. " +
    "In addition to his intellectual capabilities, Joel's exceptional communication skills greatly enhance his effectiveness. He effortlessly connects with others, fostering seamless collaboration and teamwork. By facilitating communication within our group, he creates an environment where ideas and information flow freely, ultimately benefiting the entire class. " +
    "Personally, I have greatly benefited from Joel's assistance in better understanding certain topics. He willingly shares his knowledge and goes above and beyond to help his classmates. I am grateful for his positive personality and recommend him to anyone seeking a dedicated and talented individual to work with."
  },
  {
    avatar: AVTR4,
    name: 'Tingting Wei',
    review: 'I am pleased to recommend my classmate, Joel, who possesses a wealth of experience and an agile mindset. His exceptional ability to guide the thought processes of our group sets him apart. Joel can adeptly assume any role within a team, from leadership to supporter, showcasing his versatility and commitment. His dedication and capability make him an invaluable asset to any team or project.'
  },
  {
    avatar: AVTR5,
    name: 'Jinky Castillote',
    review: 'Joel is flexible in handling change, and he easily grasps the intention of the project tickets. He opens his ideas towards the team to achieve a wider solution for the tickets.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Professional Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}       
        pagination={{ clickable: true }}       
      >
         {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt=''/>            
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
         }     
      </Swiper>
    </section>
  )
}

export default Testimonials