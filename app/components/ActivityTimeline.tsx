'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  title: string
  description: string
}

interface ActivityTimelineProps {
  timeline: TimelineItem[]
}

export default function ActivityTimeline({ timeline }: ActivityTimelineProps) {
  return (
    <section className="mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 text-neon-blue">Activity Timeline</h2>
      <div className="relative">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="mb-6 sm:mb-8 flex"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neon-purple flex items-center justify-center text-sm sm:text-base">
              {index + 1}
            </div>
            <div className="ml-4 sm:ml-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-neon-green">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="absolute top-0 bottom-0 left-5 sm:left-6 w-0.5 bg-neon-purple"></div>
      </div>
    </section>
  )
}

