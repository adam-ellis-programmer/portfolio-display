import React from 'react'
import img from '../assets/images/profile-img.png'
import imgWhite from '../assets/images/profile-img-white.png'

const HeroImg = ({ isDarkMode, profileImgs }) => {
  // console.log(profileImgs)
  const imgData = {
    white: null,
    black: null,
  }

  profileImgs &&
    profileImgs.forEach((item, i) => {
      imgData[item.type] = item.url
    })

  console.log(imgData)
  return (
    <>
      {isDarkMode ? (
        <img className='w-90 md:w-130 ' src={imgData?.white} alt='' />
      ) : (
        <img className='w-90 md:w-130 ' src={imgData?.black} alt='' />
      )}
    </>
  )
}

export default HeroImg
