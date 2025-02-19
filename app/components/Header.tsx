'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const menuItems = [
  { name: 'Αρχική', href: '/' },
  { name: 'Καινοτόμος Μέθοδος', href: '/innovative-method' },
  { name: 'Future Labs', href: '/future-labs' },
  { name: 'Φωτογραφική Συλλογή', href: '/gallery' },
  { name: 'Πρόγραμμα Δραστηριοτήτων', href: '/activities' },
  { name: 'Εργαστήριο AI', href: '/ai-lab' },
  { name: 'Εκδήλωση Ενδιαφέροντος', href: '/#interest' },
  { name: 'Επικοινωνία', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)
    if (href.includes('#')) {
      e.preventDefault()
      if (href === '/#interest') {
        const targetElement = document.querySelector('#interest')
        if (targetElement) {
          setTimeout(() => {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }, 300)
        }
      }
    }
  }

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={headerVariants}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ΚΔΑΠ Ντόντης
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleMenuItemClick(e, item.href)}
              className="text-gray-700 dark:text-gray-200 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
            >
              <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleMenuItemClick(e, item.href)}
                    className="text-gray-700 dark:text-gray-200 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors self-start"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
