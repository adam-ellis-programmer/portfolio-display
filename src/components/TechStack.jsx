import React, { useState, useEffect } from 'react'

const TechStack = () => {
  const [logos, setLogos] = useState([])
  useEffect(() => {
    const loadLogos = async () => {
      const logoModules = await Promise.all([
        import('../assets/images/tech logos/1.png'),
        import('../assets/images/tech logos/2.png'),
        import('../assets/images/tech logos/3.png'),
        import('../assets/images/tech logos/4.png'),
        import('../assets/images/tech logos/5.png'),
        import('../assets/images/tech logos/6.png'),
        import('../assets/images/tech logos/7.png'),
        import('../assets/images/tech logos/8.png'),
        import('../assets/images/tech logos/9.png'),
        import('../assets/images/tech logos/10.png'),
        import('../assets/images/tech logos/11.png'),
        import('../assets/images/tech logos/12.png'),
        import('../assets/images/tech logos/13.png'),
        import('../assets/images/tech logos/14.png'),
        import('../assets/images/tech logos/15.png'),
        import('../assets/images/tech logos/16.png'),
        import('../assets/images/tech logos/17.png'),
      ])

      const logoData = [
        { name: '', logo: logoModules[0].default },
        { name: '', logo: logoModules[1].default },
        { name: '', logo: logoModules[2].default },
        { name: '', logo: logoModules[3].default },
        { name: '', logo: logoModules[4].default },
        { name: '', logo: logoModules[5].default },
        { name: '', logo: logoModules[6].default },
        { name: '', logo: logoModules[7].default },
        { name: '', logo: logoModules[8].default },
        { name: '', logo: logoModules[9].default },
        { name: '', logo: logoModules[10].default },
        { name: '', logo: logoModules[11].default },
        { name: '', logo: logoModules[12].default },
        { name: '', logo: logoModules[13].default },
        { name: '', logo: logoModules[14].default },
        { name: '', logo: logoModules[16].default },
        // { name: '', logo: logoModules[17].default },
      ]

      setLogos(logoData)
    }
    loadLogos()
    return () => {}
  }, [])

  const technologies = [
    'django',
    'express',
    'node',
    'firebase',
    'html',
    'css',
    'javascript',
    'laravel',
    'mongo db',
    'node',
    'php',
    'python',
    'postgres',
    'react',
    'redux',
    'my sql',
    'sass',
    'next.js',
  ]
  // ---- todos ---- //
  // add nex.js and sass logos
  // ---- todos ---- //
  return (
    <div className=''>
      <div className='max-w-[1250px] mx-auto'>
        <div className='tech-stack grid grid-cols-4  gap-5'>
          {logos.map((tech, index) => (
            <div
              key={index}
              className=' flex justify-center items-center shadow p-3 rounded'
            >
              <img
                className='h-[150px] w-[150px] object-contain'
                src={tech.logo}
                alt={`${tech.name} logo`}
              />
            </div>
          ))}
        </div>

        <ul className='grid grid-cols-4 mt-15'>
          {technologies?.map((item, i) => {
            return (
              <li key={i} className='flex items-center mb-1 '>
                <i className='mr-3 text-[#FF4919] fa-solid fa-circle-check text-[1.5rem]'></i>
                <span className='text-2xl'> {item}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TechStack
