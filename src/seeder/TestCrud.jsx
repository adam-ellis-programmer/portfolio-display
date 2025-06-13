import React from 'react'
import { db } from '../firebase/config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
const TestCrud = () => {
  const testData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'lisa',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      })

      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  return (
    <div className='border flex justify-center items-center h-20'>
      <button
        onClick={testData}
        className='bg-amber-600 w-100 cursor-pointer text-white'
      >
        add
      </button>
    </div>
  )
}

export default TestCrud
