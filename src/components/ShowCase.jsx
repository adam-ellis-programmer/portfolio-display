import LazyImage from './LazyImage'

const ShowCase = ({ showcase }) => {
  // Sort the showcase data by the order property
  const sortedShowcase = [...showcase].sort((a, b) => a.order - b.order)

  return (
    <section id='showCase' className='min-h-screen'>
      <h3 className='text-4xl text-center my-5'>Showcased Projects</h3>
      <div className='px-5 md:px-0 max-w-[1200px] m-auto grid md:grid-cols-2 my-5'>
        <div className=' my-5 md:my-0'>
          <ul className='grid grid-cols-2'>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>5 + MERN</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>8 Full Stack</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>1 Python Django</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>4 Firebase</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>9 + React</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>2 Socket.io</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>2 Laravel</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>4 PHP</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>4 + e commerce</span>
            </li>
            <li className='flex items-center mb-1'>
              <i className='fa-solid fa-circle-check text-2xl text-[#60a5fa]'></i>
              <span className='ml-2 text-[1.2rem]'>+ Many More</span>
            </li>
          </ul>
        </div>
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
      <div className='grid md:grid-cols-2 gap-5 max-w-[1400px] mx-auto'>
        {sortedShowcase.map((item, i) => {
          return (
            <div
              key={item.id || i}
              className='rounded-[0.6rem] relative hover '
            >
              <a href={item.link}>
                {item.fullStack && (
                  <div className='absolute top-3 z-20 flex justify-end w-full px-5'>
                    <div className='text-white bg-rose-500 p-1 rounded'>
                      <i className='fa-solid fa-layer-group'></i>
                      <span>full stack</span>
                    </div>
                  </div>
                )}
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center md:rounded-[0.6rem] flex-col z-10'>
                  <h3 className='text-white text-3xl'>{item.lineOne}</h3>
                  <p className='text-2xl text-white'>{item.lineTwo}</p>
                </div>
                <LazyImage
                  src={item.url}
                  alt={`${item.lineOne} project screenshot`}
                  // min height helps for lazy loading
                  className='w-full md:rounded-[0.6rem] min-h-[300px]'
                  threshold={0.1}
                  rootMargin='100px'
                />
              </a>
              <a
                className='text-white absolute bottom-4 right-4 z-20 text-5xl'
                href={item.gitLink}
              >
                <i className='fa-brands fa-github'></i>
              </a>
            </div>
          )
        })}

        {/* Coming soon card */}
        <div className='h-100 rounded-none md:rounded-[0.6rem] relative hover'>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center rounded-none md:rounded-[0.6rem] flex-col z-10'>
            <h3 className='text-white text-3xl capitalize'>
              new project coming soon!
            </h3>
            <p className='text-2xl text-white capitalize'>stay tuned...</p>
          </div>
          <div className='w-full h-full bg-gray-200 dark:bg-gray-700 rounded-none md:rounded-[0.6rem]'></div>
        </div>
      </div>
    </section>
  )
}

export default ShowCase
