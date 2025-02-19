"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BotIcon as Robot, Cpu, Lightbulb, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const aiProjects = [
  {
    id: "ai-robotics",
    title: "Ρομποτική με Τεχνητή Νοημοσύνη",
    description: "Μάθετε πώς συνδυάζουμε την τεχνητή νοημοσύνη με τη ρομποτική για μια μοναδική εκπαιδευτική εμπειρία.",
    icon: Robot,
    image: "/images/ai-robotics-lab.jpg"
  },
  {
    id: "innovative-programming",
    title: "Καινοτόμος Προγραμματισμός",
    description: "Ανακαλύψτε τις μοναδικές μεθόδους προγραμματισμού που χρησιμοποιούμε στο ΚΔΑΠ Ντόντης.",
    icon: Cpu,
    image: "/images/innovative-programming-project.jpg"
  },
  {
    id: "creative-problem-solving",
    title: "Δημιουργική Επίλυση Προβλημάτων",
    description: "Μάθετε πώς η ρομποτική ενισχύει τις δεξιότητες επίλυσης προβλημάτων των παιδιών.",
    icon: Lightbulb,
    image: "/images/ai-robotics-project.jpg"
  },
  {
    id: "ai-ethics",
    title: "Ηθική της Τεχνητής Νοημοσύνης",
    description: "Εξερευνήστε τα ηθικά ζητήματα της ΤΝ μέσα από το πρόγραμμα ρομποτικής μας.",
    icon: Brain,
    image: "/images/ai-ethics-project.jpg"
  },
]

export default function AILab() {
  return (
    <section id="ai-lab" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Ρομποτική & Τεχνητή Νοημοσύνη στο ΚΔΑΠ Ντόντης
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Στο ΚΔΑΠ Ντόντης, προσφέρουμε ένα μοναδικό πρόγραμμα ρομποτικής που συνδυάζει την τεχνητή νοημοσύνη,
          προετοιμάζοντας τα παιδιά για το μέλλον της τεχνολογίας.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiProjects.map((project, index) => (
            <Link href={`/ai-lab/${project.id}`} key={project.id}>
              <motion.div
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-neon-blue transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <project.icon className="w-12 h-12 text-neon-purple mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="relative h-96 rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src="/ai-robotics-lab.jpg"
            alt="Παιδιά που εργάζονται σε projects ρομποτικής και τεχνητής νοημοσύνης στο ΚΔΑΠ Ντόντης"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-semibold mb-2 text-white">Ανακαλύψτε τη Μοναδικότητα του Προγράμματός μας</h3>
            <p className="text-gray-200">
              Στο εργαστήριό μας, τα παιδιά έχουν την ευκαιρία να πειραματιστούν με προηγμένες τεχνολογίες ρομποτικής
              και τεχνητής νοημοσύνης, αναπτύσσοντας κρίσιμες δεξιότητες για το μέλλον.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-neon-green">
            Έτοιμοι να Εξερευνήσετε τον Κόσμο της Ρομποτικής & Τεχνητής Νοημοσύνης;
          </h3>
          <p className="text-gray-300 mb-8">
            Ελάτε να ανακαλύψουμε μαζί τις απεριόριστες δυνατότητες της ρομποτικής και της τεχνητής νοημοσύνης,
            προετοιμάζοντας τα παιδιά για ένα μέλλον γεμάτο καινοτομία!
          </p>
          <Link
            href="#contact"
            className="bg-neon-purple text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-neon-blue transition-colors duration-300"
          >
            Κλείστε μια Επίσκεψη στο Εργαστήριο Ρομποτικής
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
