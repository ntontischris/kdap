'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { showToast } from './Toast'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Here you would typically make an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      showToast({ 
        message: 'Ευχαριστούμε για την εγγραφή σας!', 
        type: 'success' 
      })
      setEmail('')
    } catch (error) {
      showToast({ 
        message: 'Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε ξανά.', 
        type: 'error' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Μείνετε Ενημερωμένοι
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Εγγραφείτε στο newsletter μας για να λαμβάνετε νέα και ενημερώσεις για τις δραστηριότητές μας
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Διεύθυνση email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="px-6 py-3 bg-white text-primary rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Εγγραφή</span>
                </>
              )}
            </motion.button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            Σεβόμαστε τα προσωπικά σας δεδομένα και δεν θα τα μοιραστούμε με τρίτους
          </p>
        </motion.div>
      </div>
    </section>
  )
}
