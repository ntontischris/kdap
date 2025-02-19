'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, Bot, Headset, Cpu, Brain, Sparkles, Code, Gamepad2, Microscope, Rocket, Star, Zap, Globe2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

const futureLabs = [
  {
    id: 'ai-robotics-advanced',
    title: 'Προηγμένη Ρομποτική & AI',
    description: 'Εξερευνήστε τον συναρπαστικό κόσμο της ρομποτικής με τεχνητή νοημοσύνη. Τα παιδιά μαθαίνουν να προγραμματίζουν ρομπότ και να κατανοούν τις βασικές αρχές της AI.',
    icon: Bot,
    color: 'from-yellow-400 to-amber-600',
    benefits: [
      'Ανάπτυξη λογικής σκέψης',
      'Εξοικείωση με τεχνολογίες αιχμής',
      'Ομαδική εργασία και επίλυση προβλημάτων'
    ],
    stats: [
      { label: 'Ώρες Εργαστηρίου', value: '24+' },
      { label: 'Πρακτική Εξάσκηση', value: '80%' },
      { label: 'Ρομποτικά Projects', value: '12' }
    ]
  },
  {
    id: 'vr-metaverse',
    title: 'Εικονική Πραγματικότητα & Metaverse',
    description: 'Ταξίδι στον κόσμο του metaverse και της εικονικής πραγματικότητας. Δημιουργία και εξερεύνηση εικονικών κόσμων με τελευταίας γενιάς VR εξοπλισμό.',
    icon: Headset,
    color: 'from-yellow-300 to-amber-500',
    benefits: [
      'Χωρική αντίληψη και δημιουργικότητα',
      'Ψηφιακός γραμματισμός',
      'Διαδραστική μάθηση'
    ],
    stats: [
      { label: 'VR Εμπειρίες', value: '15+' },
      { label: 'Ώρες στο Metaverse', value: '20+' },
      { label: 'Virtual Projects', value: '8' }
    ]
  },
  {
    id: 'quantum-computing',
    title: 'Κβαντικός Προγραμματισμός για Παιδιά',
    description: 'Εισαγωγή στις βασικές έννοιες του κβαντικού υπολογισμού μέσα από παιχνίδια και διασκεδαστικές δραστηριότητες. Προετοιμάστε τα παιδιά για την επόμενη επανάσταση στην πληροφορική.',
    icon: Cpu,
    color: 'from-amber-400 to-yellow-600',
    benefits: [
      'Κατανόηση σύγχρονων τεχνολογιών',
      'Ανάπτυξη μαθηματικής σκέψης',
      'Προετοιμασία για το μέλλον'
    ],
    stats: [
      { label: 'Quantum Bits', value: '10+' },
      { label: 'Πειράματα', value: '25' },
      { label: 'Quantum Games', value: '15' }
    ]
  }
]

const achievements = [
  { icon: Star, value: '500+', label: 'Μαθητές' },
  { icon: Zap, value: '50+', label: 'Καινοτόμα Projects' },
  { icon: Globe2, value: '15+', label: 'Διεθνείς Διακρίσεις' }
]

export default function FutureLabsPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.15),transparent_30%)]" />
      </div>

      <header className="relative z-10 bg-gray-800/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            <ArrowLeft className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Επιστροφή στην αρχική</span>
          </Link>
        </div>
      </header>

      <main className="relative" ref={containerRef}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-yellow-500/30 rounded-full blur-[120px] -top-32 -left-32" />
          <div className="absolute w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] top-1/2 -right-32" />
        </div>

        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#fbbf24,45%,#f59e0b,55%,#fbbf24)] bg-[length:250%_100%] bg-clip-text text-transparent">
                Future Labs
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ανακαλύψτε το μέλλον της εκπαίδευσης μέσα από τα καινοτόμα εργαστήριά μας
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center border border-yellow-500/20 hover:border-yellow-500/40 transition-colors duration-300"
              >
                <achievement.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-400 mb-2">{achievement.value}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-32">
            {futureLabs.map((lab, index) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5 rounded-3xl transform -skew-y-3" />
                <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-yellow-500/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center mb-6">
                        <lab.icon className="w-12 h-12 text-yellow-400 mr-4" />
                        <h2 className="text-3xl font-bold text-yellow-400">{lab.title}</h2>
                      </div>
                      <p className="text-xl text-gray-300 mb-8">{lab.description}</p>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {lab.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {lab.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-gray-300">
                            <Rocket className="w-5 h-5 text-yellow-400 mr-3" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20" />
                        <Image
                          src={`/images/future-labs/${lab.id}.jpg`}
                          alt={lab.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 blur-xl" />
              <Link
                href="/contact"
                className="relative inline-block bg-gradient-to-r from-yellow-400 to-amber-600 text-gray-900 font-bold px-12 py-6 rounded-xl hover:from-yellow-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Κλείστε μια Δωρεάν Δοκιμαστική Συνεδρία
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
