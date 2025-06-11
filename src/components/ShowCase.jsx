import React from 'react'

import img from '../assets/images/project images/smart.png'
import img2 from '../assets/images/project images/easy-store.png'
import img3 from '../assets/images/project images/easy-data.png'
import img4 from '../assets/images/project images/jungle.png'
import img5 from '../assets/images/project images/cms-blog.png'
import img6 from '../assets/images/project images/vanilla-shop.png'

const ShowCase = () => {
  const showcaseArr = [
    { url: img, text: 'property rental site' },
    { url: img2, text: 'python / react e commerce' },
    { url: img3, text: 'CRM / role based permission project' },
    { url: img4, text: 'jungle store mern project' },
    { url: img5, text: 'MERN content managment system' },
    { url: img6, text: 'vanillla-js e-commerce' },
  ]
  return (
    <section className='min-h-screen'>
      <h3 className='text-4xl text-center my-10'>Showcased Projects</h3>
      <div className='grid grid-cols-2  gap-5 max-w-[1400px] mx-auto'>
        {showcaseArr.map((item, i) => {
          return (
            <div key={i} className='h-100 relative rounded-[0.6rem]'>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center rounded-[0.6rem] '>
                <h3 className='text-white text-3xl'>{item.text}</h3>
              </div>
              <img
                className='w-full h-full object-center rounded-[0.6rem] '
                src={item.url}
                alt=''
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ShowCase
