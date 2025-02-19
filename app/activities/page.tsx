'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import activities from '@/app/data/activities'

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link href="/" className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300">
            <ArrowLeft className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Επιστροφή στην αρχική</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Πρόγραμμα Δραστηριοτήτων
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Ανακαλύψτε τις συναρπαστικές δραστηριότητες που προσφέρει το ΚΔΑΠ Ντόντης
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Link href={`/activities/${activity.id}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300 h-full">
                  {activity.image && (
                    <div className="relative h-48">
                      <Image
                        src={activity.image}
                        alt={activity.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{activity.name}</h2>
                    <p className="text-gray-300 mb-4">{activity.shortDescription}</p>
                    <div className="flex items-center text-neon-blue">
                      <span>Περισσότερες πληροφορίες</span>
                      <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Δεν βρίσκετε αυτό που ψάχνετε;</h2>
          <p className="text-gray-300 mb-6">Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες</p>
          <Link 
            href="/contact" 
            className="inline-block bg-neon-blue text-white px-8 py-3 rounded-lg hover:bg-neon-purple transition-colors duration-300"
          >
            Επικοινωνία
          </Link>
        </motion.div>
      </main>
    </div>
  )
}
