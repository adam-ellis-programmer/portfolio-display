import React from 'react'

import img from '../assets/images/seo/google.png'

const SearchAndSEO = () => {
  const searchAttributes = [
    'Search Ads',
    'Display Ads',
    'You Tube Ads',
    'Shopping Ads',
    'App Ads',
    'Smart Campaigns',
  ]
  return (
    <section className=' mt-10 '>
      <h3 className='text-4xl text-center my-10'>Search and SEO</h3>
      <div className='max-w-[1200px] m-auto'>
        <div className='m-auto grid grid-cols-2'>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae, necessitatibus possimus, dolorem rem quasi eveniet veniam
            rerum ducimus eligendi consequuntur asperiores dolor atque
            cupiditate culpa dolore corrupti, eos natus quas et? Eius explicabo
            natus veritatis fuga optio qui unde, nisi hic possimus, sed ab animi
            sapiente in. Ipsum, odit.
          </p>
        </div>

        <div className=' mt-10 grid grid-cols-2'>
          <ul>
            {searchAttributes.map((item, i) => {
              return (
                <li key={i} className='mb-2 items-center'>
                  <i className='fa-brands fa-google text-2xl text-[#3862B0]'></i>
                  <span className='ml-2 text-2xl text-[#3862B0]'> {item}</span>
                </li>
              )
            })}
          </ul>
          <div>
            <div className=' flex items-center justify-center h-full'>
              <img className='w-40' src={img} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchAndSEO
