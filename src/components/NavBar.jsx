import React from 'react'

const NavBar = () => {
  const links = [
    { text: 'Home' , link: '#home' },
    { text: 'Skills' , link: '#skills'},
    { text: 'Show Case' , link: '#showCase'},
    { text: 'Design' , link: '#design'},
    { text: 'Advertising', link: '#advertising' },
  ]
  return (
    <nav className=' h-25'>
      <div className='mx-width  mx-auto  flex items-center h-full  justify-between'>
        <p className='text-2xl'>adamellis.org</p>
        <ul className='ml-5 flex '>
          {links.map((item, i) => {
            return (
              <li className='w-30 text-center mx-1 text-[1.2rem]' key={i}>
                <a href={item.link}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
