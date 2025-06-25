import { useState } from 'react'
import DownloadCVBtn from './DownloadCVBtn'
import DownloadCVBtn2 from './DownloadCVBtn2'
import CvBtn from './CvBtn'
import Password from './Password'

const handleContactClick = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  // Optional: Update URL hash without page jump
  window.history.pushState(null, null, '#contact')
  console.log('contact click')
}

const HeroButtons = ({ showcase }) => {
  const [showPassword, setShowPassword] = useState(false)
  // Track the last random index to avoid duplicates
  const [lastRandomIndex, setLastRandomIndex] = useState(-1)

  const handleRandomClick = () => {
    if (showcase && showcase.length > 0) {
      let randomIndex

      // If there's only one item, we can't avoid duplicates
      if (showcase.length === 1) {
        randomIndex = 0
      } else {
        // Keep generating until we get a different index
        do {
          randomIndex = Math.floor(Math.random() * showcase.length)
          // while true! This means: "Keep looping AS LONG AS the new random number equals the last one we picked"
          // Check: 1 === 1 (lastRandomIndex) → TRUE → loop again
          // Check: 3 === 1 → FALSE → exit loop
          // Set lastRandomIndex = 3
          // Open showcase[3].link
          // This guarantees we don't get the same project twice in a row!
        } while (randomIndex === lastRandomIndex)
      }

      // Update the last selected index
      setLastRandomIndex(randomIndex)

      const randomProject = showcase[randomIndex]

      // Navigate to the random project
      if (randomProject.link) {
        window.open(randomProject.link, '_blank') // Opens in new tab
      }
    } else {
      console.log('No showcase items available')
    }
  }

  return (
    <>
      {/* password element */}
      {showPassword && <Password />}
      {/*  */}
      <div className=' grid md:grid-cols-3 mt-5 gap-1'>
        <button
          onClick={handleContactClick}
          className='h-10 w-full border border-[#6D84B0] text-[#6D84B0] rounded cursor-pointer '
        >
          Contact Me
        </button>
        <button
          onClick={handleRandomClick}
          className='h-10 w-full bg-[#6D84B0] text-white rounded cursor-pointer'
        >
          Random Project
        </button>

        <CvBtn setShowPassword={setShowPassword} showPassword={showPassword} />
        {/* <DownloadCVBtn /> */}
        {/* <DownloadCVBtn2 /> */}
      </div>
    </>
  )
}

export default HeroButtons
