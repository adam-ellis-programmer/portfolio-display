import React from 'react'
import LazyImage from './LazyImage'

const DesignSection = ({ designs, isDarkMode }) => {
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

        <div className='mt-18'>
          <div className='grid grid-cols-2 md:grid-cols-7 gap-6'>
            {designs.map((item, i) => {
              return (
                <div
                  key={i}
                  className='shadow-2xl p-2 flex justify-center rounded-2xl hover'
                >
                  <LazyImage
                    src={item.img}
                    alt={`Design software logo ${i + 1}`}
                    className='w-30 h-30 object-contain'
                    threshold={0.2}
                    rootMargin='100px'
                    placeholder={
                      <div className='w-30 h-30 bg-gray-200 dark:bg-gray-700 animate-pulse rounded flex items-center justify-center'>
                        <svg
                          className='w-8 h-8 text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    }
                  />
                </div>
              )
            })}
          </div>

          <div>
            <ul className='mt-20 grid md:grid-cols-3 px-5 md:px-0'>
              {designTools.map((item, i) => {
                return (
                  <li key={i} className='flex items-center'>
                    <i
                      className={`fa-solid fa-square-check text-4xl ${
                        isDarkMode ? 'text-[#b2a6a6]' : 'text-[#D90404]'
                      }`}
                    ></i>
                    <span className='ml-5 text-2xl'>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSection
