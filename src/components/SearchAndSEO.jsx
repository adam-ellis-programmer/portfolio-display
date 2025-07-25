import React from 'react'
import LazyImage from './LazyImage'

const google =
  'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2Fgoogle.png?alt=media&token=cd4889cd-d0af-47bd-810a-38a04c31893b'

const facebook =
  'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Ffacebook.png?alt=media&token=b617c58e-6845-4898-9218-6b486cfaeeea'

const SearchAndSEO = ({ isDarkMode }) => {
  const searchAttributes = [
    { text: 'Search Ads', icon: 'fa-google' },
    { text: 'Display Ads', icon: 'fa-google' },
    { text: 'You Tube Ads', icon: 'fa-google' },
    { text: 'Shopping Ads', icon: 'fa-google' },
    { text: 'App Ads', icon: 'fa-google' },
    { text: 'Smart Campaigns', icon: 'fa-google' },
    { text: 'Facebook ads', icon: 'fa-facebook' },
    { text: 'Facebook campaigns', icon: 'fa-facebook' },
  ]

  return (
    <section id='advertising' className='mt-10 px-5 md:px-0'>
      <h3 className='text-4xl text-center my-10'>
        Digital Marketing | Search | SEO
      </h3>
      <div className='max-w-[1200px] m-auto'>
        <div className='m-auto grid md:grid-cols-2'>
          <div></div>
          <p>
            Adam has extensive digital advertising experience across Search,
            Display, YouTube, Shopping, and App Ads, plus Smart Campaigns. His
            SEO expertise and technical skills uniquely position him to create
            websites that function flawlessly while performing exceptionally in
            search rankings and marketing campaigns.
          </p>
        </div>

        <div className='mt-10 grid md:grid-cols-3 gap-y-10 md:gap-y-0'>
          <ul>
            {searchAttributes.map((item, i) => {
              return (
                <li key={i} className='mb-2 items-center'>
                  <i
                    className={`fa-brands ${item.icon} text-2xl ${
                      isDarkMode ? 'text-white' : 'text-[#3862B0]'
                    }`}
                  ></i>
                  <span
                    className={`ml-2 text-2xl ${
                      isDarkMode ? 'text-white' : 'text-[#3862B0]'
                    }`}
                  >
                    {item.text}
                  </span>
                </li>
              )
            })}
          </ul>

          {/* Google logo with lazy loading */}
          <div>
            <div className='flex items-center justify-center h-full'>
              <LazyImage
                src={google}
                alt='Google advertising logo'
                className='w-40'
                threshold={0.2}
                rootMargin='50px'
                placeholder={
                  <div className='w-40 h-40 bg-gray-200 dark:bg-gray-700 animate-pulse rounded flex items-center justify-center'>
                    <div className='text-gray-400 text-sm text-center'>
                      Google
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* Facebook logo with lazy loading */}
          <div>
            <div className='flex items-center justify-center h-full'>
              <LazyImage
                src={facebook}
                alt='Facebook advertising logo'
                className='w-40'
                threshold={0.2}
                rootMargin='50px'
                placeholder={
                  <div className='w-40 h-40 bg-gray-200 dark:bg-gray-700 animate-pulse rounded flex items-center justify-center'>
                    <div className='text-gray-400 text-sm text-center'>
                      Facebook
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchAndSEO
