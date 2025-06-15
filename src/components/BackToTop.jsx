import React from 'react'

const BackToTop = () => {
  const handleClick = () => {
    scrollTo({ top: 0 })
  }
  return (
    <div className=' flex justify-end px-10 fixed bottom-10 w-full z-999'>
      <button onClick={handleClick} className='cursor-pointer'>
        <i className='fa-regular fa-circle-up text-5xl'></i>
      </button>
    </div>
  )
}

export default BackToTop
