// src/components/LazyImage.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react'

const LazyImage2 = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    // prettier-ignore

    return () => {
      // observer.disconnect()
    }
  }, [])

  return (
    <div ref={imgRef} className={`lazy-image-container ${className} `}>
      <img src='' alt='' />
    </div>
  )
}

// essentially
// primitives (number and string) —
// they compare by value, so React can
// accurately detect if they actually changed.

export default LazyImage2
