import React from 'react'
import MobileNav from './MobileNav'
import { useState } from 'react'
import { useEffect } from 'react'

import img from '../assets/logo.png'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const links = [
    // { text: 'Home', link: '#home' },
    { text: 'Skills', link: '#skills' },
    { text: 'Show Case', link: '#showCase' },
    { text: 'Design', link: '#design' },
    { text: 'Advertising', link: '#advertising' },
    { text: 'contact', link: '#contact' },
  ]

  // stops body from scrolling underneath mobile nav
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('nav-open')
    } else {
      document.body.classList.remove('nav-open')
    }

    return () => {}
  }, [isNavOpen])

  return (
    <nav className=' h-25 shadow md:shadow-none mb-5 md:mb-0'>
      <div className='mx-width  mx-auto  flex items-center h-full  justify-between px-10'>
        <img className='w-40' src={img} alt='' />
        <button
          className='block lg:hidden'
          onClick={() => {
            setIsNavOpen(!isNavOpen)
          }}
        >
          <i className='fa-solid fa-bars-staggered text-3xl cursor-pointer'></i>
        </button>
        <ul className='ml-5  hidden lg:flex'>
          {links.map((item, i) => {
            return (
              <li className='w-30 text-center mx-1 text-[1.2rem] ' key={i}>
                <span className='main-nav-li'>
                  <a href={item.link}>{item.text}</a>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      {isNavOpen && <MobileNav setIsNavOpen={setIsNavOpen} links={links} />}
    </nav>
  )
}

export default NavBar
