import { useEffect, useRef } from 'react'

const ShowCase = ({ showcase }) => {
  // Create a ref to target the section element
  const sectionRef = useRef(null)

  // Sort the showcase data by the order property
  const sortedShowcase = [...showcase].sort((a, b) => a.order - b.order)

  useEffect(() => {
    // Create the intersection observer
    // prettier-ignore
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log('isIntersecting:', entry.isIntersecting)
            // console.log('isVisible:', entry.isVisible) // May be undefined in older browsers
            // console.log('in view')
          }
        })
      },{
        // Options for the observer
        threshold: 0.1, 
        rootMargin: '0px', // No margin around the root
      }
    )

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cleanup function to disconnect observer
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, []) // Empty dependency array - only run once

  return (
    <section
      id='showCase'
      className='min-h-screen'
      ref={sectionRef} // Attach the ref here
    >
      <h3 className='text-4xl text-center my-5'>Showcased Projects</h3>
      <div className='px-5 md:px-0 max-w-[1200px] m-auto grid md:grid-cols-2 my-5'>
        <div></div>
        <p>
          Adam's showcased projects demonstrate his versatility and technical
          depth across various platforms and technologies. His portfolio
          features full-stack MERN applications that highlight his ability to
          seamlessly integrate MongoDB, Express.js, React, and Node.js into
          cohesive web solutions. Additionally, his Firebase projects showcase
          expertise in modern cloud-based development, utilizing real-time
          databases and authentication systems. Adam has also developed robust
          Python applications that demonstrate his proficiency in backend
          development and data processing. His e-commerce projects particularly
          stand out, featuring secure payment integrations, user-friendly
          interfaces, and scalable architectures. Each project reflects his
          commitment to clean code, responsive design, and user-centered
          development, illustrating how his combined design and programming
          background creates exceptional digital experiences.
        </p>
      </div>
      <div className='grid md:grid-cols-2  gap-5 max-w-[1400px] mx-auto'>
        {sortedShowcase.map((item, i) => {
          return (
            <div
              key={item.id || i}
              className=' rounded-[0.6rem] relative hover'
            >
              <a href={item.link}>
                {item.fullStack && (
                  <div className='absolute top-3 z-10 flex justify-end w-full px-5'>
                    <div className='text-white bg-rose-500 p-1 rounded'>
                      <i className='fa-solid fa-layer-group'></i>
                      <span>full stack</span>
                    </div>
                  </div>
                )}
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center rounded-[0.6rem] flex-col'>
                  <h3 className='text-white text-3xl'>{item.lineOne}</h3>
                  <p className='text-2xl text-white'>{item.lineTwo} </p>
                </div>
                <img
                  className='w-full   rounded-[0.6rem] '
                  src={item.url}
                  alt=''
                />
              </a>
              <a
                className='text-white absolute bottom-4 right-4 z-100 text-5xl'
                href={item.gitLink}
              >
                <i className='fa-brands fa-github'></i>
              </a>
            </div>
          )
        })}
        <div className='h-100  rounded-[0.6rem] relative hover'>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center rounded-[0.6rem] flex-col'>
            <h3 className='text-white text-3xl capitalize'>
              new project coming soon!
            </h3>
            <p className='text-2xl text-white capitalize'> stay tuned... </p>
          </div>
          <img
            className='w-full h-full object-center rounded-[0.6rem] '
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default ShowCase
