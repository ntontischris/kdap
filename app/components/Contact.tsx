'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Παρακαλώ εισάγετε το όνομά σας.'
    if (!formData.email.trim()) return 'Παρακαλώ εισάγετε το email σας.'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Παρακαλώ εισάγετε ένα έγκυρο email.'
    if (!formData.message.trim()) return 'Παρακαλώ εισάγετε το μήνυμά σας.'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const error = validateForm()
    if (error) {
      setSubmitStatus('error')
      alert(error)
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Form submitted successfully to Make webhook')
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('Form submission failed')
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Επικοινωνία
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Στοιχεία Επικοινωνίας</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-4 text-neon-green" />
                  <span className="text-sm sm:text-base">Κύπρου 40, Πολίχνη, Θεσσαλονίκη</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-4 text-neon-green" />
                  <span className="text-sm sm:text-base">2810 310618</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-4 text-neon-green" />
                  <span className="text-sm sm:text-base">ΥΠΕΥΘΥΝΗ ΕΠΙΚΟΙΝΩΝΙΑΣ: ΚΑΛΟΥΔΙΩΤΗ ΜΑΡΙΑ (6944786527)</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-4 text-neon-green" />
                  <span className="text-sm sm:text-base">
                    <a href="mailto:info@kdapntontis.gr" className="hover:text-neon-blue transition-colors">info@kdapntontis.gr</a>
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-4 text-neon-green" />
                  <span className="text-sm sm:text-base">
                    <a href="mailto:kdapntontis@gmail.com" className="hover:text-neon-blue transition-colors">kdapntontis@gmail.com</a>
                  </span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-4 text-neon-green" />
                  <span className="text-sm sm:text-base">
                    <a href="https://www.kdapntontis.gr" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">www.kdapntontis.gr</a>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Τοποθεσία</h3>
              <div className="w-full h-96 rounded-lg shadow-lg bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400 text-center p-4">
                  Μπορείτε να μας βρείτε στη διεύθυνση:<br />
                  <span className="text-sm">
                    Κύπρου 40, Πολίχνη, Θεσσαλονίκη
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Στείλτε μας ένα μήνυμα</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Όνομα
                </label>
                <motion.input
                  whileFocus={{ boxShadow: '0 0 0 2px var(--neon-blue)' }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-blue"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ boxShadow: '0 0 0 2px var(--neon-blue)' }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-blue"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Μήνυμα
                </label>
                <motion.textarea
                  whileFocus={{ boxShadow: '0 0 0 2px var(--neon-blue)' }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-neon-blue"
                ></motion.textarea>
              </div>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-500">Το μήνυμά σας στάλθηκε επιτυχώς!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-500">Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.</p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-neon-purple transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
