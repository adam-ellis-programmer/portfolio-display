import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='mt-15'>
      <h3 className='text-4xl text-center my-10'>Contact Adam</h3>
      {/* text-[#6D84B0] */}
      <div className=' grid md:grid-cols-2 gap-2 md:gap-0'>
        <div className='flex md:justify-center items-center'>
          <i className='fa-solid fa-envelope text-5xl mr-5'></i>{' '}
          <span className='text-2xl'>hello@adamellis.org</span>
        </div>
        <div className='flex md:justify-center items-center'>
          <i className='fa-solid fa-square-phone text-5xl mr-5'></i>
          <span className='text-2xl'>07788776541</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
