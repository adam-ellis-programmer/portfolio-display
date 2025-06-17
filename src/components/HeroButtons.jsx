import React from 'react'

// make a reques to firebase to get the project urls for the random project button

const handleContactClick = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  // Optional: Update URL hash without page jump
  window.history.pushState(null, null, '#contact')
  console.log('contact click')
}

const handleRandomClick = () => {
  //...
  console.log('random click')
}

const HeroButtons = () => {
  return (
    <div className='flex justify-center mt-5 '>
      <button
        onClick={handleContactClick}
        className='btn btn-outline border-[#6D84B0] text-[#6D84B0] mx-5'
      >
        Contact Me
      </button>
      <button
        onClick={handleRandomClick}
        className='btn btn-soft bg-[#6D84B0] text-white mx-5'
      >
        Random Project
      </button>
    </div>
  )
}

export default HeroButtons
