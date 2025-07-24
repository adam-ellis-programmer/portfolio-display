import React, { useState, useEffect } from 'react'
import LazyImage from './LazyImage'

const TechStack = ({ techLogos }) => {
  const sortedLogos = [...techLogos].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  )

  return (
    <div className=''>
      <div className='max-w-[1250px] mx-auto'>
        <div className='tech-stack grid grid-cols-2 md:grid-cols-4 gap-5'>
          {sortedLogos.map((tech, index) => (
            <div
              key={index}
              className='hover flex justify-center items-center shadow-[1px_2px_20px_#ccc]/50 p-3 rounded'
            >
              <LazyImage
                src={tech.logo}
                alt={`${tech.name} logo`}
                className='h-[150px] w-[150px] object-contain'
                threshold={0.2}
                rootMargin='50px'
                placeholder={
                  <div className='h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded flex items-center justify-center'>
                    <div className='text-gray-400 text-sm text-center'>
                      {tech.name}
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        <ul className='grid grid-cols-2 md:grid-cols-4 mt-15 px-5 md:px-0'>
          {sortedLogos?.map((item, i) => {
            return (
              <li key={i} className='flex items-center mb-1'>
                <i className='mr-3 text-[#FF4919] fa-solid fa-circle-check text-[1.5rem]'></i>
                <span className='text-2xl'>{item.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TechStack
