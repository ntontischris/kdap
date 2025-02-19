'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import activities from '@/app/data/activities'
import { ChevronDown, ChevronUp, Star } from 'lucide-react'

export default function ActivitiesProgram() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Ανακαλύψτε τον Κόσμο των Δραστηριοτήτων μας στο ΚΔΑΠ Ντόντης
          </span>
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Εμπνευσμένο από τις πιο σύγχρονες εκπαιδευτικές μεθόδους, το πρόγραμμά μας προσφέρει μια μοναδική εμπειρία μάθησης και ανάπτυξης για κάθε παιδί.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(79,195,220,0.3)] hover:shadow-[0_0_30px_rgba(79,195,220,0.5)] transition-all duration-300 flex flex-col"
            >
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <activity.icon className="w-8 h-8 sm:w-10 sm:h-10 text-neon-blue mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{activity.name}</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">{activity.description}</p>
                <button
                  onClick={() => toggleExpand(activity.id)}
                  className="flex items-center text-neon-purple hover:text-neon-blue transition-colors duration-300 mb-2"
                >
                  {expandedId === activity.id ? (
                    <>
                      <span className="mr-2">Λιγότερα</span>
                      <ChevronUp className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span className="mr-2">Περισσότερα</span>
                      <ChevronDown className="w-5 h-5" />
                    </>
                  )}
                </button>
                <AnimatePresence>
                  {expandedId === activity.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xl font-semibold text-neon-green mb-3">Οφέλη για το Παιδί</h4>
                          <ul className="list-none space-y-2">
                            {activity.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <Star className="w-5 h-5 text-neon-purple mr-2 flex-shrink-0 mt-1" />
                                <span className="text-gray-300">{benefit.description}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-neon-blue mb-3">Τι θα Μάθει το Παιδί</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {activity.timeline.map((item, index) => (
                              <li key={index}>{item.title}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Image
                          src={`/activities/${activity.id}.jpg`}
                          alt={activity.name}
                          width={800}
                          height={400}
                          className="rounded-lg object-cover w-full h-64"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-4">
                  <Link 
                    href={`/activities/${activity.id}`}
                    className="inline-block bg-neon-purple text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-neon-blue transition-colors duration-300 shadow-lg hover:shadow-neon-blue"
                  >
                    Περιγραφή Δραστηριότητας
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

