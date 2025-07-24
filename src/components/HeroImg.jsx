import React, { useEffect } from 'react'

const HeroImg = ({ isDarkMode, profileImgs }) => {
  const imgData = {
    white: null,
    black: null,
  }

  profileImgs &&
    profileImgs.forEach((item, i) => {
      imgData[item.type] = item.url
    })

  // Preload both images for instant theme switching
  useEffect(() => {
    if (imgData.white && imgData.black) {
      const preloadWhite = new Image()
      const preloadBlack = new Image()

      preloadWhite.src = imgData.white
      preloadBlack.src = imgData.black

      // Optional: Add error handling
      preloadWhite.onerror = () =>
        console.warn('Failed to preload white profile image')
      preloadBlack.onerror = () =>
        console.warn('Failed to preload black profile image')
    }
  }, [imgData.white, imgData.black])

  // Show current image based on theme
  const currentImageSrc = isDarkMode ? imgData?.white : imgData?.black
  const altText = isDarkMode
    ? 'Adam Ellis profile photo (dark mode)'
    : 'Adam Ellis profile photo (light mode)'

  return (
    <img
      className='w-90 md:w-130'
      src={currentImageSrc}
      alt={altText}
      // Critical: Load immediately, don't lazy load
      loading='eager'
      // Add priority hint for better loading
      fetchPriority='high'
      // Prevent layout shift while loading
      style={{
        minHeight: '200px', // Adjust based on your actual image dimensions
        minWidth: '160px', // Adjust based on your actual image dimensions
      }}
    />
  )
}

export default HeroImg
