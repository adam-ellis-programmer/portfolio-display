// src/seeder/mainSeeder.js
import { db } from '../firebase/config.js'
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  writeBatch,
} from 'firebase/firestore'
import { techlogoData } from './techLogos.js'
import { showcaseArr } from './showCaseData.js'
import { designData } from './designData.js'

// Collection names
const collections = {
  techLogos: 'techLogos',
  showcase: 'showcase',
  designs: 'designs',
}

// Seed a single collection
async function seedCollection(collectionName, data, idField = 'id') {
  console.log(`🌱 Seeding ${collectionName}...`)
  const batch = writeBatch(db)

  try {
    data.forEach((item, index) => {
      const docId = item[idField] || `doc_${index + 1}`
      const docRef = doc(db, collectionName, docId.toString())
      batch.set(docRef, {
        ...item,
        createdAt: new Date(),
        seeded: true,
      })
    })

    await batch.commit()
    console.log(
      `✅ Successfully seeded ${data.length} documents to ${collectionName}`
    )
  } catch (error) {
    console.error(`❌ Error seeding ${collectionName}:`, error)
    throw error
  }
}

// Clear a single collection
async function clearCollection(collectionName) {
  console.log(`🧹 Clearing ${collectionName}...`)

  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const batch = writeBatch(db)

    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref)
    })

    await batch.commit()
    console.log(
      `✅ Successfully cleared ${querySnapshot.size} documents from ${collectionName}`
    )
  } catch (error) {
    console.error(`❌ Error clearing ${collectionName}:`, error)
    throw error
  }
}

// Seed all collections
async function seedAll() {
  console.log('🚀 Starting database seeding...\n')

  try {
    // Seed tech logos
    if (techlogoData && techlogoData.length > 0) {
      await seedCollection(collections.techLogos, techlogoData)
    }

    // Seed showcase data
    if (showcaseArr && showcaseArr.length > 0) {
      await seedCollection(collections.showcase, showcaseArr)
    }

    // Seed design data
    if (designData && designData.length > 0) {
      await seedCollection(collections.designs, designData)
    }

    console.log('\n🎉 All data seeded successfully!')

    // ✅ EXIT SUCCESSFULLY
    process.exit(0)
  } catch (error) {
    console.error('\n💥 Seeding failed:', error)
    process.exit(1)
  }
}

// Clear all collections
async function clearAll() {
  console.log('🧹 Starting database cleanup...\n')

  try {
    await clearCollection(collections.techLogos)
    await clearCollection(collections.showcase)
    await clearCollection(collections.designs)

    console.log('\n🎉 All collections cleared successfully!')

    // ✅ EXIT SUCCESSFULLY
    process.exit(0)
  } catch (error) {
    console.error('\n💥 Cleanup failed:', error)
    process.exit(1)
  }
}

// CLI functionality
const command = process.argv[2]
console.log(process.argv)


switch (command) {
  case 'seed':
    seedAll()
    break
  case 'clear':
    clearAll()
    break
  default:
    console.log('Usage: node src/seeder/mainSeeder.js [seed|clear]')
    process.exit(1)
}

export { seedAll, clearAll, seedCollection, clearCollection }
