import React from 'react'
import { useState } from 'react'

const CvBtn = ({ setShowPassword, showPassword }) => {
  const [isLoading, setisLoading] = useState(false)
  return (
    <button
      onClick={() => setShowPassword(!showPassword)}
      className='h-10 w-full  bg-rose-400 border-none text-white cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {showPassword ? 'close' : 'My CV'}
    </button>
  )
}

export default CvBtn
