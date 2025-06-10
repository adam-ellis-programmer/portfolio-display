import React from 'react'
import img from '../assets/images/group.png'
import HeroButtons from './HeroButtons'
const Hero = () => {
  //h-[calc(100vh-80px)]
  return (
    <section className='grid grid-cols-2  mx-width '>
      <div className='min-h-[calc(100vh-80px)] mx-width '>
        <div className='w-fit'>
          <p className='text-[8rem] font-[300] leading-none'>Adam Ellis</p>
          <p className='text-[7rem] font-[300] leading-none'>programmer</p>
          <p className='text-[4rem] font-[300]  text-end tracking-[0.7rem]'>
            and designer
          </p>
        </div>
        <HeroButtons />
        <div className=''>
          <div className='my-5 mt-10 '>
            <p className=' text-end text-3xl leading-[2.5rem] tracking-[1.1rem]'>
              contact me on
            </p>
            <p className=' text-end text-2xl leading-[2.5rem]  tracking-[1.1rem]'>
              07863807071
            </p>
          </div>
          <div className=' w-3/4 mx-auto'>
            <p className='text-2xl text-center mb-2'>
              <i className='fa-solid fa-circle-info'></i>
              <span className='ml-1'> quick info</span>
            </p>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              vel amet omnis ipsum deleniti in sed beatae minus excepturi
              reiciendis at harum corrupti fuga porro itaque quae illum
              exercitationem earum impedit eaque rem, quisquam ipsam esse!
              Accusamus, officia! Cupiditate sed dolorum, temporibus sit vero
              rerum consequuntur laboriosam alias maxime nemo! Modi architecto
              iure explicabo similique, tempora dolores laudantium, cum esse
              accusamus cumque debitis iste beatae odio? Esse adipisci, possimus
              officia doloremque sequi aperiam ea quod doloribus omnis qui
              consequuntur, consequatur odit excepturi ullam labore ut. Ex
              suscipit nemo voluptatum dolores eum modi, aut, iusto ipsum ut
              incidunt quam mollitia accusantium!
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex justify-center'>
        <div>
          <img className='h-120' src={img} alt='' />
          <div className=' mt-5'>
            <p className=' text-end text-2xl tracking-[0.5rem]'>
              over 10 projects
            </p>
            <p className=' text-end text-2xl tracking-[0.7rem]'>
              available for
            </p>
            <p className=' text-end text-2xl tracking-[0.9rem]'> demoing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
