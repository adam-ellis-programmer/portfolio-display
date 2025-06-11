import React from 'react'
import SectionHeader from './SectionHeader'
import TechStack from './TechStack'

const SkillsAndTech = () => {
  return (
    <section className='min-h-screen  bg-gray-10 0'>
      {/* <SectionHeader text='skills and technologies' /> */}
      <h3 className='text-4xl text-center my-10'>Skills And Technologies</h3>
      <TechStack />
    </section>
  )
}

export default SkillsAndTech
