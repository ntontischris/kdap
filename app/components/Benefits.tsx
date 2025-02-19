'use client'

import { motion } from 'framer-motion'

interface Benefit {
  title: string
  description: string
}

interface BenefitsProps {
  benefits: Benefit[]
}

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 text-neon-purple">Benefits for Child Development</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-neon-blue transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neon-green">{benefit.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

