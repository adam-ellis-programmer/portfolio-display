import React from 'react'
import SectionHeader from './SectionHeader'
import TechStack from './TechStack'

import img from '../assets/images/laptop.jpg'

const SkillsAndTech = ({ techLogos }) => {
  return (
    <section id='skills' className='min-h-screen  bg-gray-10 0'>
      {/* <SectionHeader text='skills and technologies' /> */}
      <h3 className='text-4xl text-center mt-10 mb-5'>
        Skills And Technologies
      </h3>
      <div className='px-5 md:px-0 max-w-[1200px] m-auto grid md:grid-cols-2 mb-5'>
        <div className='flex justify-center items-center'>
          {/* <img className='w-1/2 h-40 rounded-2xl object-center' src={img} alt="" srcset="" /> */}
        </div>
        <p>
          Adam is fully proficient in the following technologies and has
          developed expertise across multiple programming languages and
          frameworks throughout his career. His technical toolkit spans both
          front-end and back-end development, enabling him to create
          comprehensive digital solutions from concept to deployment. With a
          strong foundation in modern web technologies, Adam stays current with
          industry trends and continuously expands his skill set to meet
          evolving project requirements. His proficiency extends beyond just
          coding to include development tools, version control systems, and
          deployment platforms, making him a well-rounded developer capable of
          handling complex technical challenges with confidence and precision.
        </p>
      </div>
      <TechStack techLogos={techLogos} />
    </section>
  )
}

export default SkillsAndTech
