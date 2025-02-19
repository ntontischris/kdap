'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Sparkles,
  Brain,
  Heart,
  Users,
  Lightbulb,
  Shield
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Καινοτόμος Μέθοδος',
    description: 'Συνδυάζουμε τη Μοντεσσοριανή μέθοδο με σύγχρονες τεχνολογίες για βέλτιστα αποτελέσματα.',
  },
  {
    icon: Brain,
    title: 'Ολιστική Ανάπτυξη',
    description: 'Εστιάζουμε στην πνευματική, συναισθηματική και κοινωνική ανάπτυξη κάθε παιδιού.',
  },
  {
    icon: Heart,
    title: 'Εξατομικευμένη Προσέγγιση',
    description: 'Κάθε παιδί είναι μοναδικό και προσαρμόζουμε το πρόγραμμα στις ανάγκες του.',
  },
  {
    icon: Users,
    title: 'Έμπειροι Παιδαγωγοί',
    description: 'Η ομάδα μας αποτελείται από καταρτισμένους επαγγελματίες με αγάπη για τα παιδιά.',
  },
  {
    icon: Lightbulb,
    title: 'Δημιουργική Μάθηση',
    description: 'Μέσα από το παιχνίδι και τη δημιουργία, η μάθηση γίνεται διασκεδαστική.',
  },
  {
    icon: Shield,
    title: 'Ασφαλές Περιβάλλον',
    description: 'Προσφέρουμε ένα ασφαλές και φιλόξενο περιβάλλον για την ανάπτυξη των παιδιών.',
  },
]

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Γιατί να μας επιλέξετε
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Στο ΚΔΑΠ Καρφίτσα, δημιουργούμε ένα περιβάλλον που ενθαρρύνει τη μάθηση, τη δημιουργικότητα και την προσωπική ανάπτυξη
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ y: y }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/0 to-primary/5 rounded-lg transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300" />
                <div className="relative bg-card rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
