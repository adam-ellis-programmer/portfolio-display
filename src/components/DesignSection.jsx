import React from 'react'

import logo1 from '../assets/images/design logos/1.png'
import logo2 from '../assets/images/design logos/2.png'
import logo3 from '../assets/images/design logos/3.png'
import logo4 from '../assets/images/design logos/4.png'
import logo5 from '../assets/images/design logos/5.png'
import logo6 from '../assets/images/design logos/6.png'
import logo7 from '../assets/images/design logos/7.png'
// prettier-ignore
const DesignSection = ({ designs }) => {
  const designTools = [
    'photo shop',
    'illustrator',
    'in design',
    'premmier pro',
    'after effects',
    'figma',
    'in design',
    'apple motion',
  ]
  return (
    <section id='design' className='mt-10'>
      <div className='max-w-[1300px] m-auto'>
        <h3 className='text-4xl text-center my-10'>Design Software</h3>
        <div className='grid md:grid-cols-2 px-5 md:px-0'>
          <p>
            Adam brings over ten years of comprehensive design software
            experience to every project, with particular expertise in the Adobe
            Creative Suite. His proficiency spans video production and editing,
            where he creates engaging content for various platforms and
            purposes. Adam excels at designing eye-catching marketing materials,
            including social media posters that capture attention and drive
            engagement across digital channels. His skills extend to print
            design, where he develops professional brochures and materials for
            mass distribution, ensuring consistent brand messaging and visual
            impact. Additionally, Adam's photo and video editing capabilities
            allow him to enhance and refine visual content to professional
            standards. This extensive design software experience, combined with
            his technical programming skills, enables him to create cohesive
            digital experiences that are both visually stunning and functionally
            robust.
          </p>
        </div>

        <div className=' mt-18'>
          <div className='grid grid-cols-2 md:grid-cols-7 gap-6 '>
            {designs.map((item, i) => {
              return (
                <div
                  key={i}
                  className='shadow-2xl p-2 flex justify-center rounded-2xl hover'
                >
                  <img
                    className='w-30 h-30 object-contain'
                    src={item.img}
                    alt=''
                  />
                </div>
              )
            })}
          </div>

          <div>
            <ul className=' mt-20 grid grid-cols-2 md:grid-cols-3 px-5 md:px-0'>
              {designTools.map((item, i) => {
                return (
                  <li key={i} className='flex items-center'>
                    <i className='fa-solid fa-square-check text-4xl text-[#D90404]'></i>
                    <span className='ml-5 text-2xl'>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {/* end of div */}
      </div>
    </section>
  )
}

export default DesignSection
