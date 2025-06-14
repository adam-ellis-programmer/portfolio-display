// App.js
import { useFirebaseData } from './hooks/useFirebaseData'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SkillsAndTech from './components/SkillsAndTech'
import ShowCase from './components/ShowCase'
import DesignSection from './components/DesignSection'
import SearchAndSEO from './components/SearchAndSEO'
import Footer from './components/Footer'

function App() {
  const { data, loading, error } = useFirebaseData()

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
      {/* ----- change firebase admin data ----- */}
      {/* add in a video section for marketing vids and posters */}
      <NavBar />
      <Hero />
      <SkillsAndTech techLogos={data.techLogos} />
      <ShowCase showcase={data.showcase} />
      <DesignSection designs={data.designs} />
      <SearchAndSEO />
      <Footer />
    </>
  )
}

export default App
