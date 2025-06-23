import React, { useState, useEffect } from 'react'

const SocialLinks = () => {
  const [repoCount, setRepoCount] = useState(null)

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/adam-ellis-programmer'
        )
        const userData = await response.json()
        setRepoCount(userData.public_repos)
      } catch (error) {
        console.error('Error fetching repo count:', error)
      }
    }

    fetchRepoCount()
  }, [])

  return (
    <div className='text-6xl flex justify-center mt-8 text-[#6D84B0]'>
      <a href='https://uk.linkedin.com/in/adamellislondon'>
        <i className='fa-brands fa-linkedin mx-5'></i>
      </a>
      <a className='relative' href='https://github.com/adam-ellis-programmer?tab=repositories'>
        <i className='fa-brands fa-github mx-5'></i>
        {/* {repoCount && <span className='text-sm ml-2'>({repoCount} repos)</span>} */}
        {/* {repoCount && <span className='p-3 absolute bg-[#6D84B0] top-0 right-3 text-sm text-white w-6 h-6 rounded-full flex items-center justify-center'>{repoCount}</span>} */}
      </a>
    </div>
  )
}

export default SocialLinks
