'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Τι ηλικίες δέχεται το ΚΔΑΠ Ντόντης;",
    answer: "Το ΚΔΑΠ Ντόντης δέχεται παιδιά ηλικίας 5-12 ετών. Προσφέρουμε ένα ασφαλές και δημιουργικό περιβάλλον για την ανάπτυξη και την εκπαίδευση παιδιών δημοτικού σχολείου."
  },
  {
    question: "Ποιες είναι οι ώρες λειτουργίας του ΚΔΑΠ Ντόντης;",
    answer: "Το ΚΔΑΠ Ντόντης λειτουργεί καθημερινά από Δευτέρα έως Παρασκευή, από τις 14:00 έως τις 21:00. Αυτό το ωράριο έχει σχεδιαστεί για να εξυπηρετεί τις ανάγκες των εργαζόμενων γονέων στη Θεσσαλονίκη."
  },
  {
    question: "Ποιες δραστηριότητες προσφέρει το ΚΔΑΠ Ντόντης;",
    answer: "Το ΚΔΑΠ Ντόντης προσφέρει ένα ευρύ φάσμα δραστηριοτήτων, συμπεριλαμβανομένων: Μοντεσσοριανής εκπαίδευσης, ρομποτικής, εικαστικών τεχνών, μουσικής, θεατρικού παιχνιδιού, αθλητικών δραστηριοτήτων, και υποστήριξης στη μελέτη. Όλες οι δραστηριότητές μας στοχεύουν στην ολόπλευρη ανάπτυξη των παιδιών."
  },
  {
    question: "Πώς εφαρμόζεται η Μοντεσσοριανή μέθοδος στο ΚΔΑΠ Ντόντης;",
    answer: "Στο ΚΔΑΠ Ντόντης, εφαρμόζουμε τη Μοντεσσοριανή μέθοδο μέσω εξατομικευμένης μάθησης, χρήσης ειδικά σχεδιασμένων υλικών, και δημιουργίας ενός προετοιμασμένου περιβάλλοντος που ενθαρρύνει την αυτόνομη εξερεύνηση και μάθηση. Οι εκπαιδευτικοί μας είναι ειδικά εκπαιδευμένοι στη Μοντεσσοριανή μέθοδο."
  },
  {
    question: "Υπάρχει δυνατότητα μεταφοράς των παιδιών από και προς το ΚΔΑΠ Ντόντης;",
    answer: "Ναι, το ΚΔΑΠ Ντόντης προσφέρει υπηρεσία μεταφοράς για τα παιδιά από επιλεγμένα σημεία της Θεσσαλονίκης. Παρακαλούμε επικοινωνήστε μαζί μας για περισσότερες λεπτομέρειες σχετικά με τις διαδρομές και τα δρομολόγια."
  },
  {
    question: "Πώς μπορώ να εγγράψω το παιδί μου στο ΚΔΑΠ Ντόντης;",
    answer: "Για να εγγράψετε το παιδί σας στο ΚΔΑΠ Ντόντης, μπορείτε να επικοινωνήσετε μαζί μας τηλεφωνικά στο 2810 310618 ή να συμπληρώσετε τη φόρμα εκδήλωσης ενδιαφέροντος στην ιστοσελίδα μας. Θα χαρούμε να σας καλωσορίσουμε για μια επίσκεψη στις εγκαταστάσεις μας στην Πολίχνη Θεσσαλονίκης."
  }
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Συχνές Ερωτήσεις
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full text-left p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neon-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neon-blue" />
                )}
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-gray-700 rounded-lg"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

