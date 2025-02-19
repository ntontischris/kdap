'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ExpressionOfInterest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    activity: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', activity: '', message: '' })
  }

  return (
    <section id="interest" className="py-16 sm:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Εκδήλωση Ενδιαφέροντος
          </span>
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Όνομα
            </label>
            <motion.input
              whileFocus={{ boxShadow: '0 0 0 2px var(--neon-purple)' }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-purple"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{ boxShadow: '0 0 0 2px var(--neon-purple)' }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-purple"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="activity" className="block text-sm font-medium text-gray-300 mb-2">
              Δραστηριότητα Ενδιαφέροντος
            </label>
            <motion.select
              whileFocus={{ boxShadow: '0 0 0 2px var(--neon-purple)' }}
              id="activity"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-purple"
            >
              <option value="">Επιλέξτε μια δραστηριότητα</option>
              <option value="kialia">Τα κιάλια μου κρατώ την πόλη μου κοιτώ</option>
              <option value="logos-gnosi">Λόγος και Γνώση</option>
              <option value="saita">Έτοιμοι για επιβίβαση στην Σαΐτα;</option>
              <option value="skaki">Σκάκι</option>
              <option value="rompotiki">Ρομποτική</option>
              <option value="theatriki-agogi">Θεατρική Αγωγή</option>
              <option value="kinisiologia">Κινησιολογία</option>
              <option value="gymnastics">Γυμνάζομαι παίζοντας</option>
              <option value="meleti">Μελέτη</option>
              <option value="chromomagemata">Χρωμομαγέματα</option>
            </motion.select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Μήνυμα
            </label>
            <motion.textarea
              whileFocus={{ boxShadow: '0 0 0 2px var(--neon-purple)' }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-purple"
            ></motion.textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-neon-purple text-white font-semibold py-3 px-6 rounded-full hover:bg-neon-blue transition-colors duration-300"
          >
            Υποβολή
          </motion.button>
        </form>
      </div>
    </section>
  )
}

