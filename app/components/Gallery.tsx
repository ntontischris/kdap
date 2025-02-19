'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const galleryImages = [
  {
    src: '/gallery/image1.jpg',
    alt: 'Δραστηριότητες στο ΚΔΑΠ',
    width: 1200,
    height: 800,
  },
  // Add more images here
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Φωτογραφική Συλλογή
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Δείτε στιγμιότυπα από τις δραστηριότητες και τη καθημερινότητα των παιδιών στο ΚΔΑΠ μας
          </p>
        </motion.div>

        <PhotoProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <PhotoView src={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </PhotoView>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    Προβολή
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  )
}
