import React, { useState } from 'react'
import { storage, db } from '../firebase/config'
import { ref, getDownloadURL } from 'firebase/storage'
import { doc, getDoc } from 'firebase/firestore'
import bcrypt from 'bcryptjs'

const Password = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const verifyPasswordAndDownload = async (enteredPassword) => {
    try {
      // Get the stored password hash from Firestore
      const passwordDoc = await getDoc(doc(db, 'security', 'cvPassword'))

      if (!passwordDoc.exists()) {
        throw new Error(
          'Password not configured. Please contact administrator.'
        )
      }

      const storedHash = passwordDoc.data().passwordHash

      // Compare entered password with stored hash using bcrypt
      const isValid = await bcrypt.compare(enteredPassword, storedHash)

      if (!isValid) {
        throw new Error('Incorrect password')
      }

      // Password is correct, proceed with download
      const fileRef = ref(storage, 'test.pdf')
      const downloadURL = await getDownloadURL(fileRef)

      // Create download link
      const link = document.createElement('a')
      link.href = downloadURL
      link.download = 'CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setSuccess('Download started successfully!')
      setPassword('') // Clear password field
    } catch (error) {
      console.error('Error during password verification or download:', error)
      throw error
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!password.trim()) {
      setError('Please enter a password')
      return
    }

    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      await verifyPasswordAndDownload(password)
    } catch (error) {
      if (error.message.includes('Incorrect password')) {
        setError('Incorrect password. Please try again.')
      } else if (error.message.includes('Password not configured')) {
        setError('Password system not set up. Please contact administrator.')
      } else if (error.message.includes('object-not-found')) {
        setError('CV file not found. Please contact administrator.')
      } else {
        setError('An error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='mt-5'>
      <form onSubmit={handleSubmit}>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input-border w-full text-2xl outline-rose-400 mb-3'
          placeholder='Enter Password'
          disabled={isLoading}
        />

        <button
          type='submit'
          disabled={isLoading || !password.trim()}
          className='w-full bg-rose-600 text-white py-2 px-4 rounded hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? 'Verifying...' : 'Download CV'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className='mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className='mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded'>
          {success}
        </div>
      )}
    </div>
  )
}

export default Password
