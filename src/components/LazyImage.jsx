// src/components/LazyImage.jsx
import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = null,
  onLoad = null,
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  const handleImageLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  const handleImageError = () => {
    setHasError(true)
  }

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {/* Show placeholder while not in view or loading */}
      {!isLoaded && (
        <div className={`lazy-placeholder ${className}`}>
          {placeholder || (
            <div className='bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center'>
              <svg
                className='w-8 h-8 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Load actual image when in view */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div
          className={`lazy-error ${className} bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
        >
          <span className='text-gray-500 text-sm'>Failed to load image</span>
        </div>
      )}
    </div>
  )
}

export default LazyImage
