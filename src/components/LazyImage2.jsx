// src/components/LazyImage.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react'

const LazyImage2 = (
  src,
  alt,
  className = '',
  placeholder = null,
  onLoad = null,
  threshold = 0.1,
  rootMargin = '50px',
) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      scrollMargin: '0px',
      threshold: 1.0,
    }

    // Each LazyImage instance has its own observer closed over inside its own useEffect:
    // Why Disconnect at All?
    // Once the image is in view and loading, you don't need to watch it anymore — it's a one time job:
    // It's like a security guard who only needs to open the door once — once you're in, they can go home. No point standing there watching a door that's already been opened.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elem = entry.target
          console.log(elem)
        }
      })
    }, options)

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={imgRef} className={`lazy-image-container ${className} `}>
      <img src={src} alt='' />
    </div>
  )
}

// essentially
// primitives (number and string) —
// they compare by value, so React can
// accurately detect if they actually changed.

export default LazyImage2
