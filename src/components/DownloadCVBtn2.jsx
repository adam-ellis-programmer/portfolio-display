import React, { useState } from 'react'
import { storage } from '../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'

const DownloadCVBtn2 = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    
    // Create a reference to the file we want to download
    const fileRef = ref(storage, 'test.pdf')
    
    // Get the download URL using Firebase docs pattern
    getDownloadURL(fileRef)
      .then((url) => {
        // Instead of inserting into <img> tag, we create download link
        console.log('download-url--', url)
        
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a')
        link.href = url
        link.download = 'CV.pdf' // This will be the downloaded file name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setIsLoading(false)
      })
      .catch((error) => {
        // Handle errors using Firebase docs error handling pattern
        console.error('Error downloading file:', error)
        
        switch (error.code) {
          case 'storage/object-not-found':
            alert('File not found. Please contact support.')
            break
          case 'storage/unauthorized':
            alert('You do not have permission to download this file.')
            break
          case 'storage/canceled':
            alert('Download was canceled.')
            break
          case 'storage/unknown':
            alert('An unknown error occurred. Please try again.')
            break
          default:
            alert('Failed to download CV. Please try again.')
            break
        }
        
        setIsLoading(false)
      })
  }

  return (
    <button 
      onClick={handleDownload}
      disabled={isLoading}
      className='border border-rose-600 w-35 cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {isLoading ? 'Downloading...' : 'My CV'}
    </button>
  )
}

export default DownloadCVBtn2