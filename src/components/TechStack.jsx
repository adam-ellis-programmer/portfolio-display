import React, { useState, useEffect } from 'react'

const TechStack = ({ techLogos }) => {
  const technologies = [
    'django',
    'express',
    'node',
    'firebase',
    'html',
    'css',
    'javascript',
    'laravel',
    'mongo db',
    'node',
    'php',
    'python',
    'postgres',
    'react',
    'redux',
    'my sql',
    'sass',
    'next.js',
    'regex',
  ]
  // ---- todos ---- //
  // add nex.js and sass logos
  // ---- todos ---- //
  return (
    <div className=''>
      <div className='max-w-[1250px] mx-auto'>
        <div className='tech-stack grid grid-cols-4  gap-5'>
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className='hover flex justify-center items-center shadow-[1px_2px_20px_#ccc]/50 p-3 rounded'
            >
              <img
                className='h-[150px] w-[150px] object-contain'
                src={tech.logo}
                alt={`${tech.name} logo`}
              />
            </div>
          ))}
        </div>

        <ul className='grid grid-cols-4 mt-15'>
          {technologies?.map((item, i) => {
            return (
              <li key={i} className='flex items-center mb-1 '>
                <i className='mr-3 text-[#FF4919] fa-solid fa-circle-check text-[1.5rem]'></i>
                <span className='text-2xl'> {item}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TechStack
