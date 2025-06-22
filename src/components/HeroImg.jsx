import React from 'react'
import img from '../assets/images/profile-img.png'
import imgWhite from '../assets/images/profile-img-white.png'

const HeroImg = ({isDarkMode}) => {
  return (
    <>
      {isDarkMode ? (
        <img className='w-90 md:w-130 ' src={imgWhite} alt='' />
      ) : (
        <img className='w-90 md:w-130 ' src={img} alt='' />
      )}
    </>
  )
}

export default HeroImg
