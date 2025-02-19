'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Brain, Users, Sparkles, Lightbulb, Compass } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SocraticMethod() {
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Μαιευτική Μέθοδος Σωκράτη
          </span>
        </motion.h1>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-xl text-center text-gray-300 mb-8">
            Η Μαιευτική Μέθοδος του Σωκράτη είναι μια διαλογική προσέγγιση που στοχεύει στην ανάπτυξη 
            της κριτικής σκέψης μέσω καθοδηγούμενων ερωτήσεων και διαλόγου. Στο ΚΔΑΠ Ντόντης, 
            εφαρμόζουμε αυτή τη μέθοδο με σύγχρονο και διαδραστικό τρόπο, προσαρμοσμένο στις ανάγκες 
            και τα ενδιαφέροντα των παιδιών.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={Brain}
            title="Κριτική Σκέψη"
            description="Ανάπτυξη της ικανότητας ανάλυσης, σύνθεσης και αξιολόγησης πληροφοριών."
          />
          <FeatureCard
            icon={MessageCircle}
            title="Διαλογική Μάθηση"
            description="Ενθάρρυνση της ενεργού συμμετοχής και της ανταλλαγής ιδεών μέσω του διαλόγου."
          />
          <FeatureCard
            icon={Users}
            title="Ενσυναίσθηση"
            description="Καλλιέργεια της ικανότητας κατανόησης διαφορετικών οπτικών και απόψεων."
          />
          <FeatureCard
            icon={Lightbulb}
            title="Δημιουργική Επίλυση Προβλημάτων"
            description="Ανάπτυξη δεξιοτήτων για την αντιμετώπιση σύνθετων προκλήσεων με καινοτόμους τρόπους."
          />
          <FeatureCard
            icon={Compass}
            title="Αυτογνωσία"
            description="Ενίσχυση της κατανόησης του εαυτού και των προσωπικών αξιών."
          />
          <FeatureCard
            icon={Sparkles}
            title="Καινοτομία"
            description="Ενθάρρυνση της πρωτότυπης σκέψης και της δημιουργικότητας."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-neon-purple transition-all duration-300 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-neon-purple flex items-center">
            <Sparkles className="mr-2" />
            Καινοτομία στην Πράξη
          </h2>
          <p className="text-gray-300 mb-4">
            Στο ΚΔΑΠ Ντόντης, εφαρμόζουμε τη Σωκρατική Μέθοδο με σύγχρονο τρόπο:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Χρήση διαδραστικών ψηφιακών πλατφορμών για εικονικούς διαλόγους</li>
            <li>Συμμετοχή σε εικονικές συζητήσεις με ιστορικές προσωπικότητες</li>
            <li>Δημιουργία σεναρίων επίλυσης προβλημάτων βασισμένων σε πραγματικές καταστάσεις</li>
            <li>Ενσωμάτωση παιχνιδιών ρόλων για την εξάσκηση διαλογικών δεξιοτήτων</li>
            <li>Χρήση τεχνολογίας AI για προσαρμοσμένες ερωτήσεις και σενάρια</li>
          </ul>
          <p className="text-gray-300">
            Με αυτόν τον τρόπο, διατηρούμε την ουσία της Σωκρατικής Μεθόδου, ενώ παράλληλα την καθιστούμε 
            ελκυστική και σχετική για τα παιδιά της ψηφιακής εποχής.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="relative h-96 rounded-lg overflow-hidden mb-12"
        >
          <Image
            src="/socratic-method-illustration.jpg"
            alt="Εφαρμογή της Σωκρατικής Μεθόδου στο ΚΔΑΠ Ντόντης"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-neon-purple">Ανακαλύψτε τη Δύναμη του Διαλόγου</h2>
          <p className="text-gray-300 mb-8">
            Η Μαιευτική Μέθοδος του Σωκράτη στο ΚΔΑΠ Ντόντης δεν είναι απλά μια εκπαιδευτική τεχνική - 
            είναι ένα ταξίδι αυτο-ανακάλυψης και ανάπτυξης κριτικής σκέψης για κάθε παιδί. Ελάτε να 
            εξερευνήσουμε μαζί τη δύναμη των ερωτήσεων και του διαλόγου!
          </p>
          <Link href="/contact" className="bg-neon-purple text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-neon-blue transition-colors duration-300">
            Κλείστε μια Επίσκεψη
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-neon-purple transition-all duration-300 p-6"
    >
      <Icon className="w-12 h-12 mb-4 text-neon-purple" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

