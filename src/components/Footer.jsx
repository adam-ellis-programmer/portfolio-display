import React from 'react'
const date = new Date()
const Footer = () => {
  return (
    <footer className=' h-40 flex items-center justify-center'>
      <span className='text-2xl'> built by  © adam ellis {date.getFullYear()}</span>
    </footer>
  )
}

export default Footer
