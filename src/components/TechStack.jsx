import React, { useState, useEffect } from 'react'

const TechStack = () => {
  const [logos, setLogos] = useState([])
  useEffect(() => {
    const loadLogos = async () => {
      const logoModules = await Promise.all([
        import('../assets/images/tech logos/django.png'),
        import('../assets/images/tech logos/express.png'),
        import('../assets/images/tech logos/firebase.png'),
        import('../assets/images/tech logos/html-js-css.png'),
        // import('../assets/images/tech logos/js.png'),
        import('../assets/images/tech logos/laravel.png'),
        import('../assets/images/tech logos/mongo.png'),
        import('../assets/images/tech logos/node.png'),
        import('../assets/images/tech logos/php.png'),
        import('../assets/images/tech logos/python.png'),
        import('../assets/images/tech logos/postgresql.svg'),
        import('../assets/images/tech logos/react.png'),
        import('../assets/images/tech logos/redux.png'),
        import('../assets/images/tech logos/sql.png'),
      ])
      console.log(logoModules)

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
  ]
  return (
    <section className='max-w-[950px] mx-auto mt-10'>
      <div className='tech-stack grid grid-cols-4 mt-10 gap-10'>
        {logos.map((tech, index) => (
          <img
            className='h-[100px]'
            key={index}
            src={tech.logo}
            alt={`${tech.name} logo`}
          />
        ))}
      </div>

      <ul className='grid grid-cols-4 mt-8'>
        {technologies?.map((item) => {
          return (
            <li>
              <i className='mr-5 text-green-600 fa-solid fa-circle-check'></i>
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TechStack
