'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, MessageCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

interface MethodCardProps {
  icon: React.ElementType
  title: string
  shortDescription: string
  longDescription: string
  benefits: string[]
  link: string // Updated: link is now required
  color: string
}

function MethodCard({ icon: Icon, title, shortDescription, longDescription, benefits, link, color }: MethodCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(232,121,249,0.3)] hover:shadow-[0_0_30px_rgba(232,121,249,0.5)] transition-all duration-300 p-6 relative`}
    >
      <motion.div
        className={`absolute top-0 left-0 w-full h-1 bg-${color}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        className={`absolute top-0 right-0 w-1 h-full bg-${color}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <div className="flex items-center mb-4">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={`w-12 h-12 rounded-full bg-${color} flex items-center justify-center mr-4`}
        >
          <Icon className="w-6 h-6 text-gray-900" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-center">
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
      </div>
      <p className="text-gray-300 mb-4">{shortDescription}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-400 mb-4">{longDescription}</p>
            <h4 className="text-lg font-semibold text-neon-green mb-2">Οφέλη για τα παιδιά:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="mb-2">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {benefit}
                  </motion.span>
                </li>
              ))}
            </ul>
            {link && (
              <Link href={link}>
                <motion.span
                  className={`bg-${color} text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-neon-blue hover:text-white transition-colors duration-300 inline-block`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Εξερευνήστε την {title}
                </motion.span>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-4 flex items-center text-${color} hover:text-neon-blue transition-colors duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? 'Λιγότερα' : 'Περισσότερα'}
        {isExpanded ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
      </motion.button>
    </motion.div>
  )
}

export default function InnovativeMethod() {
  return (
    <section id="innovative-method" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Καινοτόμος Εκπαιδευτική Μέθοδος στο ΚΔΑΠ Ντόντης
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-300 mb-12"
        >
          Στο ΚΔΑΠ Ντόντης, συνδυάζουμε παραδοσιακές παιδαγωγικές μεθόδους με σύγχρονη τεχνολογία για μια μοναδική εκπαιδευτική εμπειρία.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MethodCard
            icon={Brain}
            title="Μοντεσσοριανή Αγωγή"
            shortDescription="Εξατομικευμένη μάθηση που ενθαρρύνει την ανεξαρτησία και την αυτο-ανακάλυψη."
            longDescription="Η Μοντεσσοριανή μέθοδος στο ΚΔΑΠ μας συνδυάζει τα παραδοσιακά Μοντεσσοριανά υλικά με σύγχρονες παιδαγωγικές προσεγγίσεις. Τα παιδιά εξερευνούν έννοιες με πολλαπλούς τρόπους, ενισχύοντας την κατανόηση και τη δημιουργικότητά τους μέσα από προσεκτικά σχεδιασμένες δραστηριότητες και εξατομικευμένη καθοδήγηση."
            benefits={[
              "Ανάπτυξη αυτονομίας και αυτοπεποίθησης",
              "Ενίσχυση της συγκέντρωσης και της αυτοπειθαρχίας",
              "Καλλιέργεια της φυσικής περιέργειας και αγάπης για μάθηση",
              "Ανάπτυξη λεπτής κινητικότητας και αισθητηριακών δεξιοτήτων",
              "Εξατομικευμένη πρόοδος στο ρυθμό κάθε παιδιού"
            ]}
            link="/montessori-education"
            color="neon-pink"
          />
          <MethodCard
            icon={MessageCircle}
            title="Διαθεματική Προσέγγιση"
            shortDescription="Ολιστική μάθηση μέσω της διασύνδεσης διαφορετικών γνωστικών αντικειμένων."
            longDescription="Εφαρμόζουμε μια καινοτόμο διαθεματική προσέγγιση που συνδέει διαφορετικά γνωστικά πεδία σε ενιαίες, ουσιαστικές εμπειρίες μάθησης. Μέσα από project-based learning και hands-on δραστηριότητες, τα παιδιά ανακαλύπτουν τις συνδέσεις μεταξύ τέχνης, επιστήμης, μαθηματικών και λογοτεχνίας."
            benefits={[
              "Ανάπτυξη κριτικής και δημιουργικής σκέψης",
              "Βαθύτερη κατανόηση εννοιών μέσω διασυνδέσεων",
              "Ενίσχυση της ικανότητας επίλυσης προβλημάτων",
              "Καλλιέργεια της ολιστικής αντίληψης της γνώσης",
              "Ανάπτυξη δεξιοτήτων συνεργασίας και επικοινωνίας"
            ]}
            link="/interdisciplinary-approach"
            color="neon-blue"
          />
          <MethodCard
            icon={Sparkles}
            title="Βιωματική Μάθηση"
            shortDescription="Μάθηση μέσω εμπειρίας και ενεργού συμμετοχής στην εκπαιδευτική διαδικασία."
            longDescription="Η βιωματική μάθηση στο ΚΔΑΠ μας βασίζεται στην αρχή ότι τα παιδιά μαθαίνουν καλύτερα μέσα από την άμεση εμπειρία και τον πειραματισμό. Δημιουργούμε πλούσια μαθησιακά περιβάλλοντα όπου τα παιδιά μπορούν να εξερευνήσουν, να πειραματιστούν και να ανακαλύψουν τη γνώση μέσα από την προσωπική τους εμπειρία."
            benefits={[
              "Ενεργός συμμετοχή στη μαθησιακή διαδικασία",
              "Ανάπτυξη πρακτικών δεξιοτήτων και εμπειριών",
              "Ενίσχυση της αυτενέργειας και πρωτοβουλίας",
              "Καλλιέργεια της δημιουργικότητας και φαντασίας",
              "Σύνδεση θεωρίας με την πράξη"
            ]}
            link="/experiential-learning"
            color="neon-green"
          />
        </div>
      </div>
    </section>
  )
}
