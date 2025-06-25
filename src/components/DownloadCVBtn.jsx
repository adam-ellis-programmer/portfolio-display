import React, { useState } from 'react'
import { storage } from '../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'

const DownloadCVBtn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsLoading(true)

      // Create a reference to the file in Firebase Storage
      // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
      const fileRef = ref(storage, 'test.pdf')

      // Get the download URL
      const downloadURL = await getDownloadURL(fileRef)
      console.log('download-url--', downloadURL)

      // Create a temporary anchor element to trigger download
      const link = document.createElement('a')
      link.href = downloadURL
      link.download = 'CV.pdf' // This will be the downloaded file name
      // The browser requires elements to be part of the DOM for programmatic clicks to trigger properly.
      document.body.appendChild(link)
      console.log('REF-->', link.ref)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading file:', error)
      alert('Failed to download CV. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // const link = document.createElement('a')  // Create anchor element
  // link.href = downloadURL                   // Tell it WHAT to download (the Firebase URL)
  // link.download = 'CV.pdf'                  // Tell it what to NAME the download
  // document.body.appendChild(link)           // Add to page (required for click to work)
  // link.click()                             // Trigger the download
  // document.body.removeChild(link)          // Clean up

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className='border bg-rose-400 border-none text-white w-35 cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {isLoading ? 'Downloading...' : 'My CV'}
    </button>
  )
}

export default DownloadCVBtn
