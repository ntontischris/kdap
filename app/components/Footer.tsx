'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">ΚΔΑΠ Ντόντης</h3>
            <p className="text-gray-400">Κύπρου 40, Πολίχνη, Θεσσαλονίκη</p>
            <p className="text-gray-400">Τηλ: 2810 310618</p>
            <p className="text-gray-400">Email: info@kdapntontis.gr</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Χρήσιμοι Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li><Link href="/activities" className="text-gray-400 hover:text-neon-blue transition-colors">Δραστηριότητες</Link></li>
              <li><Link href="/montessori-education" className="text-gray-400 hover:text-neon-blue transition-colors">Μοντεσσοριανή Εκπαίδευση</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Επικοινωνία</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-neon-blue transition-colors">Πολιτική Απορρήτου</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Ακολουθήστε μας</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/kdapntontis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://twitter.com/kdapntontis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/kdapntontis"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} ΚΔΑΠ Ντόντης. Όλα τα δικαιώματα διατηρούνται.</p>
          <p className="text-sm text-gray-400 mt-4 sm:mt-0">
            Σχεδιασμένο με ❤️ στη Θεσσαλονίκη
          </p>
        </div>
      </div>
    </footer>
  )
}

