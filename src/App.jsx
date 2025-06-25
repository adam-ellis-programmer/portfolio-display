// App.js
import { useFirebaseData } from './hooks/useFirebaseData'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SkillsAndTech from './components/SkillsAndTech'
import ShowCase from './components/ShowCase'
import DesignSection from './components/DesignSection'
import SearchAndSEO from './components/SearchAndSEO'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import { useState } from 'react'
import { useEffect } from 'react'

import { analytics } from './firebase/config' // your config file
import { logEvent } from 'firebase/analytics'
import PasswordSetup from './password setup/PasswordSetup'

function App() {
  const { data, loading, error } = useFirebaseData()

  useEffect(() => {
    // Initialize analytics tracking
    if (analytics) {
      logEvent(analytics, 'app_start')

      // Track page view
      logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        section_name: 'showcase',
      })
    }
  }, [])

  // Initialize dark mode state from localStorage or default to false
  // Lazy useState for efficiency
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkTheme')
      return savedTheme ? JSON.parse(savedTheme) : false
    }
    return false
  })

  // prettier-ignore
  //   const [isDarkMode, setIsDarkMode] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     // detects user's system theme
  //     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  //     // console.log('systemPrefersDark--->',systemPrefersDark)
  //     return systemPrefersDark
  //   }
  //   return false
  // })

  // Apply theme to document on component mount and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Save to localStorage
    localStorage.setItem('darkTheme', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  if (loading) {
    return (
      <div className=' flex h-screen justify-center items-center'>
        <div className='loading text-6xl'>Loading...</div>
      </div>
    )
  }

  if (error) {
    return <div className='error'>Error: {error}</div>
  }

  return (
    <>
      {/* <PasswordSetup /> */}
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero showcase={data.showcase} isDarkMode={isDarkMode} />
      <SkillsAndTech techLogos={data.techLogos} />
      <ShowCase showcase={data.showcase} />
      <DesignSection designs={data.designs} isDarkMode={isDarkMode} />
      <SearchAndSEO isDarkMode={isDarkMode} />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
