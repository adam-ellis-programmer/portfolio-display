import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px or more
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Don't render if not visible
  if (!isVisible) return null

  return (
    <div className='flex justify-end px-10 fixed bottom-10 w-full z-10'>
      <button onClick={handleClick} className='cursor-pointer text-[#6D84B0]'>
        <i className='fa-regular fa-circle-up text-5xl'></i>
      </button>
    </div>
  )
}

export default BackToTop
