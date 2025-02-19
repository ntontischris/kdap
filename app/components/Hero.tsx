'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="ΚΔΑΠ Καρφίτσα Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Καλώς ήρθατε στο ΚΔΑΠ Καρφίτσα
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            Ένας χώρος δημιουργικής απασχόλησης όπου τα παιδιά ανακαλύπτουν, μαθαίνουν και διασκεδάζουν
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Εγγραφή Τώρα
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              Μάθετε Περισσότερα
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white/50 rounded-full p-1"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
