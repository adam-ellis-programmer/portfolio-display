import React from 'react'
import MobileNav from './MobileNav'
import { useState } from 'react'
import { useEffect } from 'react'

import img from '../assets/logo-signature-1.png'
import imgWhite from '../assets/signature-white.png'
import DarkMode from './DarkMode'

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const links = [
    { text: 'Skills', link: '#skills' },
    { text: 'Show Case', link: '#showCase' },
    { text: 'Design', link: '#design' },
    { text: 'Marketing', link: '#advertising' },
    { text: 'Contact', link: '#contact' },
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
    <nav className=' h-25 shadow-[1px_2px_11px_rgba(0,0,0,0.1)] md:shadow-none mb-10 md:mb-0 '>
      <div className='mx-width  mx-auto  flex items-center h-full  justify-between px-10'>
        {isDarkMode ? (
          <img className='w-40' src={imgWhite} alt='' />
        ) : (
          <img className='w-40' src={img} alt='' />
        )}
        <div className=' flex w-25 justify-between'>
          <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <button
            className='block lg:hidden'
            onClick={() => {
              setIsNavOpen(!isNavOpen)
            }}
          >
            <i className='fa-solid fa-bars-staggered text-3xl cursor-pointer'></i>
          </button>
        </div>
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
          <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </ul>
      </div>
      {isNavOpen && (
        <MobileNav
          setIsNavOpen={setIsNavOpen}
          isDarkMode={isDarkMode}
          links={links}
        />
      )}
    </nav>
  )
}

export default NavBar
