'use client'

import { motion } from 'framer-motion'
import { Bot, Headset, Cpu, Sparkles, Gamepad2, Microscope } from 'lucide-react'
import Link from 'next/link'

const highlightedLabs = [
  {
    title: 'Προηγμένη Ρομποτική & AI',
    icon: Bot,
    color: 'from-yellow-400 to-amber-600',
  },
  {
    title: 'VR & Metaverse',
    icon: Headset,
    color: 'from-yellow-300 to-amber-500',
  },
  {
    title: 'Κβαντικός Προγραμματισμός',
    icon: Cpu,
    color: 'from-amber-400 to-yellow-600',
  }
]

export default function FutureLabsShowcase() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#fbbf24,45%,#f59e0b,55%,#fbbf24)] bg-[length:250%_100%] bg-clip-text text-transparent">
              Future Labs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ανακαλύψτε τα καινοτόμα εργαστήριά μας που συνδυάζουν την τεχνητή νοημοσύνη με την παιδαγωγική αριστεία
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlightedLabs.map((lab, index) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-gray-800 rounded-lg p-6 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                <lab.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{lab.title}</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mb-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/future-labs"
            className="inline-block bg-gradient-to-r from-yellow-400 to-amber-600 text-gray-900 font-bold px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Εξερευνήστε όλα τα Future Labs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
