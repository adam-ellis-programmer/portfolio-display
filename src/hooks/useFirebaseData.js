// src/hooks/useFirebaseData.js
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export const useFirebaseData = () => {
  const [data, setData] = useState({
    designs: [],
    showcase: [],
    techLogos: [],
    profileImgs: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true)

        // Fetch all collections in parallel
        const [
          designsSnapshot,
          showcaseSnapshot,
          techLogosSnapshot,
          profileSnapshot,
        ] = await Promise.all([
          getDocs(collection(db, 'designs')),
          getDocs(collection(db, 'showcase')),
          getDocs(collection(db, 'techLogos')),
          getDocs(collection(db, 'profiles')),
        ])

        // Process the data
        const designsData = designsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        // console.log(designsSnapshot)

        const showcaseData = showcaseSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        const techLogosData = techLogosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        const profileData = profileSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setData({
          designs: designsData,
          showcase: showcaseData,
          techLogos: techLogosData,
          profileImgs: profileData,
        })
      } catch (err) {
        console.error('Error fetching data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAllData()
  }, [])

  return { data, loading, error }
}
