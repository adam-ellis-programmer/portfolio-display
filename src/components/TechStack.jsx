import React, { useState, useEffect } from 'react'

const TechStack = ({ techLogos }) => {
  const sortedLogos = [...techLogos].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  )

  // console.log('sorted logos---->', sortedLogos)

  // All items with missing order get value 0
  // All items with 0 are considered "equal" in the sort comparison
  // JavaScript's stable sort preserves their original relative order
  // They appear before items with order: 1, 2, 3, etc.

  // When comparing items without order:
  // (0) - (0) = 0  // 0 means "equal" - no change in order

  // When comparing no-order vs ordered items:
  // (0) - (1) = -1  // Negative means first item comes before second
  // (0) - (2) = -2  // Even more negative - still comes first

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
    'PostgreSQL',
    'react',
    'redux',
    'my sql',
    'sass',
    'next.js',
    'regex',
  ]

  // --- keep for reference -- //
  // Remove duplicates and sort (case-insensitive)
  const uniqueSortedTechnologies = [...new Set(technologies)].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )
  return (
    <div className=''>
      <div className='max-w-[1250px] mx-auto'>
        <div className='tech-stack grid grid-cols-2 md:grid-cols-4  gap-5'>
          {sortedLogos.map((tech, index) => (
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

        <ul className='grid grid-cols-2 md:grid-cols-4 mt-15'>
          {sortedLogos?.map((item, i) => {
            return (
              <li key={i} className='flex items-center mb-1 '>
                <i className='mr-3 text-[#FF4919] fa-solid fa-circle-check text-[1.5rem]'></i>
                <span className='text-2xl'> {item.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TechStack
