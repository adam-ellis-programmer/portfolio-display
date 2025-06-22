import React from 'react'

const MobileNav = ({ setIsNavOpen, links, isDarkMode }) => {
  return (
    <aside className={` fixed top-0 bottom-0 w-full ${isDarkMode ? 'bg-[#576276]' : 'bg-white'} z-100 block lg:hidden p-10  overflow-scroll`}>
      <div className='h-10 flex justify-end px-5'>
        <button className='cursor-pointer' onClick={() => setIsNavOpen(false)}>
          <i className='text-5xl fa-solid fa-square-xmark'></i>
        </button>
      </div>

      <ul>
        {links.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => setIsNavOpen(false)}
              className='text-3xl mb-5'
            >
              <a className=' w-full  block h-full' href={item.link}>
                {item.text}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default MobileNav
