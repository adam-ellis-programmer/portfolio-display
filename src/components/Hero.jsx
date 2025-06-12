import React from 'react'
import img from '../assets/images/group.png'
import HeroButtons from './HeroButtons'

const name = 'designer'
const Hero = () => {
  //h-[calc(100vh-80px)]
  return (
    <section className=' '>
      {/* main wrap */}
      <div className='min-h-[calc(100vh-80px)]  grid grid-cols-2  mx-width'>
        <div className=''>
          <div className='w-fit'>
            <p className='text-[8rem] font-[300] leading-none text-[#D9042B]'>
              Adam Ellis{' '}
              <span className='text-[#D9042B] -rotate-11 inline-block text-[3rem'>
                .
              </span>
            </p>
            <p className='text-[7rem] font-[300] leading-none'>
              {' '}
              <span className='text-[#D9042B]'>programmer</span>{' '}
              <span className='text-[#D9042B] rotate-7 inline-block'>!</span>
            </p>
            <p className='text-[2rem] font-[300] leading-none text-end tracking-[1rem] mr-3 mt-2 text-[#203763]'>
              <span className='london-span'>London</span>
            </p>
            <p className='text-[4rem] font-[300]  text-end tracking-[0.7rem] text-[#203763]'>
              and designer
            </p>
          </div>
          <HeroButtons />
          <div className=''>
            <div className='my-5 mt-10 '>
              <p className=' text-end text-3xl leading-[2.5rem] tracking-[1.1rem] text-[#203763]'>
                contact me on
              </p>
              <p className=' text-end text-2xl leading-[2.5rem]  tracking-[1.1rem] text-[#203763] '>
                07863807071
              </p>
            </div>
            <div className=' w-3/4 mx-auto'>
              <p className='text-2xl text-center mb-2'>
                <i className='fa-solid fa-circle-info text-[#D9042B]'></i>
                <span className='ml-1'> quick bio</span>
              </p>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate vel amet omnis ipsum deleniti in sed beatae minus
                excepturi reiciendis at harum corrupti fuga porro itaque quae
                illum exercitationem earum impedit eaque rem, quisquam ipsam
                esse! Accusamus, officia! Cupiditate sed dolorum, temporibus sit
                vero rerum consequuntur laboriosam alias maxime nemo! Modi
                architecto iure explicabo similique, tempora dolores laudantium,
                cum esse accusamus cumque debitis iste beatae odio? Esse
                adipisci, possimus officia doloremque sequi aperiam ea quod
                doloribus omnis qui consequuntur, consequatur odit excepturi
                ullam labore ut. Ex suscipit nemo voluptatum dolores eum modi,
                aut, iusto ipsum ut incidunt quam mollitia accusantium!
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='flex justify-center'>
          <div className=''>
            {/* <p className='text-center text-6xl absolute'>digital design and production!</p> */}
            <div className=' flex justify-center'>
              <img className='h-120' src={img} alt='' />
            </div>
            <div className=' mt-5'>
              <p className=' text-end text-2xl tracking-[0.5rem]'>
                over <span className=''>10</span> projects
              </p>
              <p className=' text-end text-2xl tracking-[0.7rem]'>
                available for
              </p>
              <p className=' text-end text-2xl tracking-[0.9rem]'> demoing</p>
              <div className=' mt-10 flex justify-center'>
                <p className='max-w-3/4 bg-[#0A3161]/80 shadow-2xl text-white  p-5 rounded-[0.4rem]  page-quote'>
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do. If you haven't found it yet, keep looking. Don't
                  settle. -- steve jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
