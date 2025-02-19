'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Lightbulb, Users, Code, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const aiProjects = [
  {
    id: 'ai-robotics',
    title: 'Ρομποτική με Τεχνητή Νοημοσύνη',
    subtitle: 'Το Μέλλον της Τεχνολογίας στα Χέρια των Παιδιών',
    icon: Code,
  },
  {
    id: 'innovative-programming',
    title: 'Καινοτόμος Προγραμματισμός',
    subtitle: 'Κωδικοποιώντας το Μέλλον με Δημιουργικότητα και Φαντασία',
    icon: Brain,
  },
  {
    id: 'creative-problem-solving',
    title: 'Δημιουργική Επίλυση Προβλημάτων',
    subtitle: 'Μεταμορφώνοντας Προκλήσεις σε Ευκαιρίες Μάθησης',
    icon: Lightbulb,
  },
  {
    id: 'ai-ethics',
    title: 'Ηθική της Τεχνητής Νοημοσύνης',
    subtitle: 'Διαμορφώνοντας Υπεύθυνους Πολίτες του Ψηφιακού Κόσμου',
    icon: Users,
  },
]

export default function AILabPage() {
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
            Εργαστήριο Τεχνητής Νοημοσύνης
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Ανακαλύψτε τον συναρπαστικό κόσμο της τεχνητής νοημοσύνης μέσα από καινοτόμα προγράμματα και δραστηριότητες
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Link href={`/ai-lab/${project.id}`}>
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 h-full">
                  <div className="flex items-center mb-4">
                    {project.icon && <project.icon className="w-8 h-8 text-neon-blue mr-3" />}
                    <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                  </div>
                  <p className="text-gray-300">{project.subtitle}</p>
                  <div className="mt-4 flex items-center text-neon-blue">
                    <span>Μάθετε περισσότερα</span>
                    <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gray-800 rounded-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-neon-blue">Γιατί να Επιλέξετε το Εργαστήριο AI;</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-neon-purple" />
              <h3 className="text-lg font-semibold mb-2">Καινοτόμα Μάθηση</h3>
              <p className="text-gray-300">Σύγχρονες μέθοδοι διδασκαλίας και τεχνολογίες αιχμής</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-neon-green" />
              <h3 className="text-lg font-semibold mb-2">Εξατομικευμένη Προσέγγιση</h3>
              <p className="text-gray-300">Προσαρμοσμένο πρόγραμμα στις ανάγκες κάθε παιδιού</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-neon-pink" />
              <h3 className="text-lg font-semibold mb-2">Πιστοποιημένοι Εκπαιδευτές</h3>
              <p className="text-gray-300">Έμπειροι επαγγελματίες στην τεχνητή νοημοσύνη</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
