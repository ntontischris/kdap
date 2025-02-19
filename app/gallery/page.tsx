'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Sample gallery data - replace with your actual images
const galleryImages = [
  {
    src: '/images/gallery/1.jpg',
    alt: 'Δραστηριότητες στο ΚΔΑΠ',
    caption: 'Δημιουργικές δραστηριότητες'
  },
  {
    src: '/images/gallery/2.jpg',
    alt: 'Παιχνίδι και μάθηση',
    caption: 'Μάθηση μέσω παιχνιδιού'
  },
  // Add more images here
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
  }
  
  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
  }

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
            Φωτογραφική Συλλογή
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Στιγμιότυπα από τις δραστηριότητες και την καθημερινότητα στο ΚΔΑΠ Ντόντης
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute top-4 right-4 text-white hover:text-neon-blue transition-colors"
                  onClick={closeLightbox}
                >
                  <X className="w-8 h-8" />
                </button>
                
                <button
                  className="absolute left-4 text-white hover:text-neon-blue transition-colors"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <button
                  className="absolute right-4 text-white hover:text-neon-blue transition-colors"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div className="relative w-full max-w-4xl aspect-video">
                  <Image
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                  <p className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
                    {galleryImages[selectedImage].caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
