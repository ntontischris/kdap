'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  url: string
  title: string
  description: string
  longDescription: string
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MakBiwM80zTm8rNmz6wtuFVjplIcJ0.png",
    title: "Εκπαιδευτικές Περιπέτειες",
    description: "Διαδραστική μάθηση με εξειδικευμένο εκπαιδευτικό υλικό",
    longDescription: "Σε αυτό το φωτεινό και ζωηρό περιβάλλον, τα παιδιά εμβαθύνουν στον κόσμο της γνώσης μέσα από καινοτόμες εκπαιδευτικές δραστηριότητες. Κάθε χρώμα και σχήμα στο δωμάτιο είναι σχεδιασμένο για να διεγείρει τη φαντασία και να ενθαρρύνει τη μάθηση, δημιουργώντας ένα χώρο όπου η εκπαίδευση γίνεται μια συναρπαστική περιπέτεια."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ghwziFGBXr7yfEDHLmSvlwaxY1Zz1v.png",
    title: "Στρατηγική & Διπλωματία",
    description: "Ανάπτυξη στρατηγικής σκέψης μέσω του σκακιού",
    longDescription: "Μπροστά στη μεγάλη παγκόσμια χάρτα, οι νεαροί στρατηγοί μας συγκεντρώνονται γύρω από σκακιέρες, εξασκώντας τη διπλωματία και τη στρατηγική σκέψη. Κάθε κίνηση στη σκακιέρα είναι ένα μάθημα ζωής, διδάσκοντας υπομονή, προνοητικότητα και την τέχνη του να βλέπεις το μεγάλο πλάνο - δεξιότητες που θα τους συνοδεύουν σε όλη τους τη ζωή."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vvIb14S6AqmZROGSsoPPUxnJ0yq45f.png",
    title: "Προσωπική Ανάπτυξη",
    description: "Εξατομικευμένη καθοδήγηση για κάθε παιδί",
    longDescription: "Σε αυτή την άνετη γωνιά, κάθε παιδί λαμβάνει την αποκλειστική προσοχή που χρειάζεται. Οι έμπειροι παιδαγωγοί μας αφιερώνουν χρόνο για να κατανοήσουν τις μοναδικές ανάγκες και τα ταλέντα κάθε παιδιού, καλλιεργώντας ένα περιβάλλον όπου η προσωπική ανάπτυξη ανθίζει και κάθε επίτευγμα, μικρό ή μεγάλο, γιορτάζεται."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uRxNh7deF7tbkB0f1fspluTuQ8mQQt.png",
    title: "Ομαδική Συνεργασία",
    description: "Καλλιέργεια κοινωνικών δεξιοτήτων μέσω ομαδικών δράσεων",
    longDescription: "Σε αυτόν τον ζωντανό χώρο, τα παιδιά μαθαίνουν τη δύναμη της συνεργασίας. Μέσα από διασκεδαστικές ομαδικές δραστηριότητες, αναπτύσσουν βασικές κοινωνικές δεξιότητες όπως η επικοινωνία, η ενσυναίσθηση και η ομαδική εργασία. Κάθε χαμόγελο και κάθε high-five είναι μια μικρή νίκη στο ταξίδι τους προς την κοινωνική και συναισθηματική ωριμότητα."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yxNXPeYRdcp2vfyek399seL3XsbotT.png",
    title: "Καλλιτεχνική Έκφραση",
    description: "Απελευθέρωση της δημιουργικότητας μέσω τέχνης",
    longDescription: "Σε αυτό το πολύχρωμο εργαστήριο τέχνης, η φαντασία δεν έχει όρια. Τα παιδιά βυθίζονται σε έναν κόσμο χρωμάτων, σχημάτων και υφών, εξερευνώντας διάφορες μορφές καλλιτεχνικής έκφρασης. Κάθε πινελιά και κάθε γλυπτό είναι ένα βήμα προς την ανακάλυψη του εαυτού τους και την ανάπτυξη της μοναδικής τους καλλιτεχνικής φωνής."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-016f032QAm5P8YOA6tpEezOroYMejV.png",
    title: "Μαγικές Βραδιές",
    description: "Ειδικές εκδηλώσεις σε ένα ονειρικό περιβάλλον",
    longDescription: "Όταν το φως χαμηλώνει, ο χώρος μας μεταμορφώνεται σε ένα μαγικό σκηνικό. Υπό το απαλό φως των γιρλάντων, τα παιδιά βιώνουν μοναδικές εμπειρίες - από αφηγήσεις παραμυθιών και μουσικές παραστάσεις μέχρι επιστημονικά πειράματα που λάμπουν στο σκοτάδι. Κάθε βραδινή εκδήλωση είναι μια αξέχαστη περιπέτεια που τροφοδοτεί τη φαντασία και δημιουργεί αναμνήσεις ζωής."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rHb8gEuddZY5rpuVUvNPK4sYg12YXk.png",
    title: "Ψηφιακή Εξερεύνηση",
    description: "Εξοικείωση με την τεχνολογία του μέλλοντος",
    longDescription: "Στη γωνιά της τεχνολογίας μας, τα παιδιά έρχονται σε επαφή με τον ψηφιακό κόσμο με έναν ασφαλή και εκπαιδευτικό τρόπο. Από διαδραστικά εκπαιδευτικά παιχνίδια μέχρι εισαγωγή στον προγραμματισμό, οι νεαροί εξερευνητές μας αποκτούν πολύτιμες δεξιότητες για το μέλλον, ενώ ταυτόχρονα μαθαίνουν για την υπεύθυνη χρήση της τεχνολογίας."
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hG9I1jX03cDEQHPP1x6nkHn5yZxg6z.png",
    title: "Χρωματιστός Παράδεισος",
    description: "Ασφαλής και ευχάριστος χώρος για παιχνίδι και μάθηση",
    longDescription: "Αυτός ο πολύχρωμος παράδεισος είναι σχεδιασμένος για να προσφέρει ασφάλεια, άνεση και ατελείωτη διασκέδαση. Τα μαλακά πατώματα και τα φωτεινά χρώματα δημιουργούν ένα ζεστό και φιλόξενο περιβάλλον όπου τα παιδιά μπορούν να εξερευνήσουν, να παίξουν και να μάθουν ελεύθερα. Εδώ, κάθε γωνιά είναι μια νέα ευκαιρία για ανακάλυψη και κάθε παιχνίδι είναι ένα μάθημα ζωής."
  }
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0
    )
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) {
        if (event.key === 'ArrowLeft') handlePrevious()
        if (event.key === 'ArrowRight') handleNext()
        if (event.key === 'Escape') setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Μαγικές Στιγμές στο ΚΔΑΠ Ντόντης
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Εξερευνήστε τον μαγικό κόσμο του ΚΔΑΠ Ντόντης μέσα από τη φωτογραφική μας συλλογή. Κάθε εικόνα αποτυπώνει μια μοναδική στιγμή μάθησης, δημιουργικότητας και χαράς, αναδεικνύοντας την ποικιλομορφία των δραστηριοτήτων και των εμπειριών που προσφέρουμε.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-60 sm:h-72 md:h-80 bg-gray-800 rounded-xl overflow-hidden cursor-pointer perspective-1000 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.7)]"
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(index)
              }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{image.title}</h3>
                <p className="text-sm sm:text-base text-gray-200">{image.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-neon-blue transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon-blue transition-colors"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neon-blue transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full max-w-4xl aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(138,43,226,0.5)]"
            >
              <Image
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 sm:p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{galleryImages[currentIndex].title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-2 sm:mb-4">{galleryImages[currentIndex].description}</p>
                <p className="text-sm sm:text-base text-gray-300">{galleryImages[currentIndex].longDescription}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

