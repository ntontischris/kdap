'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Brain, 
  Music, 
  Code, 
  Gamepad2, 
  BookOpen,
  Microscope,
  Users
} from 'lucide-react'

const activities = [
  {
    icon: Palette,
    title: 'Εργαστήριο Τεχνών & Χειροτεχνιών',
    description: 'Ανακαλύψτε τη δημιουργικότητα μέσα από ζωγραφική, κεραμική, κολάζ και χειροτεχνίες. Τα παιδιά εξερευνούν διάφορες τεχνικές και υλικά, αναπτύσσοντας την καλλιτεχνική τους έκφραση.',
  },
  {
    icon: Brain,
    title: 'Εργαστήριο Γνωστικής Ανάπτυξης',
    description: 'Εξειδικευμένα εκπαιδευτικά παιχνίδια και δραστηριότητες για την ενίσχυση της κριτικής σκέψης, μνήμης και επίλυσης προβλημάτων. Χρησιμοποιούμε σύγχρονες παιδαγωγικές μεθόδους.',
  },
  {
    icon: Music,
    title: 'Εργαστήριο Μουσικοκινητικής',
    description: 'Εξερευνήστε τον κόσμο της μουσικής, του ρυθμού και της κίνησης. Περιλαμβάνει μουσικά όργανα, χορό, θεατρικό παιχνίδι και δραστηριότητες έκφρασης.',
  },
  {
    icon: Code,
    title: 'Εργαστήριο Ψηφιακής Δημιουργίας',
    description: 'Εισαγωγή στον προγραμματισμό και την τεχνολογία με διασκεδαστικό τρόπο. Τα παιδιά μαθαίνουν βασικές έννοιες κώδικα, ρομποτικής και ψηφιακής δημιουργίας.',
  },
  {
    icon: Gamepad2,
    title: 'Εργαστήριο Εκπαιδευτικού Παιχνιδιού',
    description: 'Ομαδικά παιχνίδια που προάγουν τη συνεργασία, την επικοινωνία και τη διασκέδαση. Συνδυάζουμε μάθηση και παιχνίδι με καινοτόμες μεθόδους.',
  },
  {
    icon: BookOpen,
    title: 'Εργαστήριο Μελέτης & Γνώσης',
    description: 'Εξατομικευμένη υποστήριξη στα μαθήματα και τις σχολικές εργασίες. Προσφέρουμε τεχνικές μελέτης και οργάνωσης για καλύτερη μαθησιακή εμπειρία.',
  },
  {
    icon: Microscope,
    title: 'Εργαστήριο STEM',
    description: 'Ανακαλύψτε τον συναρπαστικό κόσμο της επιστήμης μέσα από διαδραστικά πειράματα και projects. Συνδυάζουμε Επιστήμη, Τεχνολογία, Μηχανική και Μαθηματικά.',
  },
  {
    icon: Users,
    title: 'Εργαστήριο Κοινωνικών Δεξιοτήτων',
    description: 'Ανάπτυξη συναισθηματικής νοημοσύνης, επικοινωνίας και ομαδικού πνεύματος. Δραστηριότητες που ενισχύουν την αυτοπεποίθηση και τις διαπροσωπικές σχέσεις.',
  },
  {
    icon: Microscope,
    title: 'Εργαστήριο Περιβαλλοντικής Εκπαίδευσης',
    description: 'Μαθαίνουμε για το περιβάλλον μέσα από βιωματικές δράσεις, κηπουρική και οικολογικά projects. Καλλιεργούμε την περιβαλλοντική συνείδηση.',
  },
  {
    icon: Brain,
    title: 'Εργαστήριο Δημιουργικής Γραφής',
    description: 'Ανακαλύψτε τη μαγεία της αφήγησης και της συγγραφής. Τα παιδιά δημιουργούν τις δικές τους ιστορίες, ποιήματα και παραμύθια.',
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

export function Activities() {
  return (
    <section id="activities" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Πρόγραμμα Δραστηριοτήτων
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ανακαλύψτε το πλούσιο πρόγραμμα δραστηριοτήτων που προσφέρουμε για την ολόπλευρη ανάπτυξη των παιδιών
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
