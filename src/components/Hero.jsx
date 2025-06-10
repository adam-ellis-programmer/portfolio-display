import React from 'react'
import img from '../assets/images/group.png'
import HeroButtons from './HeroButtons'
const Hero = () => {
  //h-[calc(100vh-80px)]
  return (
    <section className='grid grid-cols-2 border '>
      <div className='h-[calc(100vh-80px)] mx-width '>
        <div className='w-fit'>
          <p className='text-[8rem] font-[300] leading-none'>Adam Ellis</p>
          <p className='text-[7rem] font-[300] leading-none'>programmer</p>
          <p className='text-[4rem] font-[300]  text-end tracking-[0.7rem]'>
            and designer
          </p>
        </div>
        <HeroButtons />
        <p>contact me on</p>
        <p>07863807071</p>
      </div>
      {/*  */}
      <div className='flex justify-center'>
        <div>
          <img className='h-120' src={img} alt='' />
          <p>over 10 projects</p>
          <p>available</p>
          <p>for demoing</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
