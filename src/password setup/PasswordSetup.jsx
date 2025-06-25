import React, { useState } from 'react'
import { db } from '../firebase/config'
import { doc, setDoc } from 'firebase/firestore'
import bcrypt from 'bcryptjs'

const PasswordSetup = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSetupPassword = async (e) => {
    e.preventDefault()

    if (!password) {
      setMessage('Please enter a password')
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      // Hash the password with bcrypt
      const saltRounds = 10 // Higher number = more secure but slower
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      console.log('Original password:', password)
      console.log('Hashed password:', hashedPassword)

      // Store the hashed password in Firestore
      await setDoc(doc(db, 'security', 'cvPassword'), {
        passwordHash: hashedPassword,
        createdAt: new Date().toISOString(),
      })

      setMessage('Password successfully hashed and stored!')
      setPassword('')
    } catch (error) {
      console.error('Error setting up password:', error)
      setMessage('Error setting up password. Check console for details.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>Setup CV Download Password</h2>
      <p className='text-sm text-gray-600 mb-4'>
        This is a one-time setup to create a hashed password for CV downloads
      </p>

      <form onSubmit={handleSetupPassword}>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password to hash and store'
          className='w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500'
          disabled={isLoading}
        />

        <button
          type='submit'
          disabled={isLoading || !password}
          className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? 'Hashing and Storing...' : 'Setup Password'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-2 rounded text-sm ${
            message.includes('Error')
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  )
}

export default PasswordSetup
