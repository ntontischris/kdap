'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import activities from '@/app/data/activities'
import Benefits from '@/app/components/Benefits'
import ActivityTimeline from '@/app/components/ActivityTimeline'

export default function ActivityPage() {
  const params = useParams()
  const activity = activities.find(a => a.id === Number(params.id))

  if (!activity) {
    return <div>Activity not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link href="/#activities" className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300">
            <ArrowLeft className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Επιστροφή στις Δραστηριότητες του ΚΔΑΠ Ντόντης</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activity.name}
        </motion.h1>

        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-neon-blue">Περιγραφή</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">{activity.description}</p>
        </motion.div>

        <Benefits benefits={activity.benefits} />

        <ActivityTimeline timeline={activity.timeline} />
      </main>
    </div>
  )
}

