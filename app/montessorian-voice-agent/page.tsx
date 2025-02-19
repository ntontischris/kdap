'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, MessageCircle, Brain, Users, Lightbulb, Compass, Headphones } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function MontessorianVoiceAgent() {
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
            Μοντεσσοριανός Voice Agent
          </span>
        </motion.h1>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-xl text-center text-gray-300 mb-8">
            Ο Μοντεσσοριανός Voice Agent είναι ένας καινοτόμος ψηφιακός βοηθός που συνδυάζει τις αρχές της 
            Μοντεσσοριανής εκπαίδευσης με την τεχνητή νοημοσύνη. Στο ΚΔΑΠ Ντόντης, αυτή η τεχνολογία 
            χρησιμοποιείται για να υποστηρίξει την εξατομικευμένη μάθηση και την ανάπτυξη των soft skills 
            των παιδιών μέσω προσαρμοσμένων φωνητικών αλληλεπιδράσεων.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={Brain}
            title="Εξατομικευμένη Μάθηση"
            description="Προσαρμογή στο μοναδικό ρυθμό και στυλ μάθησης κάθε παιδιού."
          />
          <FeatureCard
            icon={MessageCircle}
            title="Ανάπτυξη Γλωσσικών Δεξιοτήτων"
            description="Ενίσχυση των επικοινωνιακών ικανοτήτων μέσω φυσικών διαλόγων."
          />
          <FeatureCard
            icon={Users}
            title="Κοινωνικο-συναισθηματική Ανάπτυξη"
            description="Καλλιέργεια ενσυναίσθησης και κοινωνικών δεξιοτήτων."
          />
          <FeatureCard
            icon={Lightbulb}
            title="Δημιουργική Σκέψη"
            description="Ενθάρρυνση της φαντασίας και της καινοτόμου σκέψης."
          />
          <FeatureCard
            icon={Compass}
            title="Αυτοκατευθυνόμενη Μάθηση"
            description="Προώθηση της αυτονομίας και της ανεξάρτητης εξερεύνησης."
          />
          <FeatureCard
            icon={Headphones}
            title="Διαδραστική Τεχνολογία"
            description="Εξοικείωση με σύγχρονες τεχνολογίες μέσω φυσικής αλληλεπίδρασης."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-neon-green transition-all duration-300 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-neon-green flex items-center">
            <Sparkles className="mr-2" />
            Καινοτομία στην Πράξη
          </h2>
          <p className="text-gray-300 mb-4">
            Στο ΚΔΑΠ Ντόντης, ο Μοντεσσοριανός Voice Agent εφαρμόζεται με πρωτοποριακούς τρόπους:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Προσαρμοστικά μαθησιακά μονοπάτια βασισμένα στις απαντήσεις και προτιμήσεις του παιδιού</li>
            <li>Διαδραστικές ιστορίες και παιχνίδια ρόλων για την ανάπτυξη γλωσσικών και κοινωνικών δεξιοτήτων</li>
            <li>Εξατομικευμένες προκλήσεις και γρίφοι για την ενίσχυση της κριτικής σκέψης</li>
            <li>Φωνητική καθοδήγηση σε πρακτικές δραστηριότητες, συνδυάζοντας ψηφιακή και χειρωνακτική μάθηση</li>
            <li>Συνεχής αξιολόγηση και προσαρμογή του εκπαιδευτικού περιεχομένου μέσω AI</li>
          </ul>
          <p className="text-gray-300">
            Με αυτόν τον τρόπο, ο Μοντεσσοριανός Voice Agent γίνεται ένας πολύτιμος σύμμαχος στην εκπαιδευτική 
            διαδικασία, ενισχύοντας την εξατομικευμένη μάθηση και την ολόπλευρη ανάπτυξη των παιδιών.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="relative h-96 rounded-lg overflow-hidden mb-12"
        >
          <Image
            src="/montessorian-voice-agent-illustration.jpg"
            alt="Μοντεσσοριανός Voice Agent στο ΚΔΑΠ Ντόντης"
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
          <h2 className="text-3xl font-bold mb-6 text-neon-green">Ανακαλύψτε το Μέλλον της Εκπαίδευσης</h2>
          <p className="text-gray-300 mb-8">
            Ο Μοντεσσοριανός Voice Agent στο ΚΔΑΠ Ντόντης δεν είναι απλά ένα τεχνολογικό εργαλείο - είναι 
            ένας ψηφιακός σύντροφος που ενισχύει την εξατομικευμένη μάθηση και την ανάπτυξη κρίσιμων 
            δεξιοτήτων για το μέλλον. Ελάτε να γνωρίσετε πώς η τεχνολογία και η παιδαγωγική συνεργάζονται 
            για να δημιουργήσουν μια μοναδική εκπαιδευτική εμπειρία!
          </p>
          <Link href="/contact" className="bg-neon-green text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-neon-blue hover:text-white transition-colors duration-300">
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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-neon-green transition-all duration-300 p-6"
    >
      <Icon className="w-12 h-12 mb-4 text-neon-green" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

