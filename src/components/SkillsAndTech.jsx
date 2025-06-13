import React from 'react'
import SectionHeader from './SectionHeader'
import TechStack from './TechStack'

const SkillsAndTech = ({techLogos}) => {
  return (
    <section className='min-h-screen  bg-gray-10 0'>
      {/* <SectionHeader text='skills and technologies' /> */}
      <h3 className='text-4xl text-center mt-10 mb-5'>Skills And Technologies</h3>
      <div className=' max-w-[1200px] m-auto grid grid-cols-2 mb-5'>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          laudantium minus minima ipsa odio reprehenderit voluptatibus qui nam
          cupiditate praesentium illo magnam laborum non sit, quod temporibus
          blanditiis soluta repudiandae!{' '}
        </p>
      </div>      
      <TechStack techLogos={techLogos} />
    </section>
  )
}

export default SkillsAndTech
