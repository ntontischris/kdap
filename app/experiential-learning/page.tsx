import Image from 'next/image'
import Link from 'next/link'

export default function ExperientialLearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="inline-block animate-text-shimmer bg-[linear-gradient(110deg,#e879f9,45%,#60a5fa,55%,#e879f9)] bg-[length:250%_100%] bg-clip-text text-transparent">
            Βιωματική Μάθηση
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 mb-8 text-center">
            Ανακαλύψτε τη μάθηση μέσα από την εμπειρία και την ενεργό συμμετοχή
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-neon-green">Η Προσέγγισή μας</h2>
              <p className="text-gray-300">
                Στο ΚΔΑΠ μας, πιστεύουμε ότι η καλύτερη μάθηση έρχεται μέσα από την άμεση εμπειρία. 
                Δημιουργούμε περιβάλλοντα όπου τα παιδιά μπορούν να εξερευνήσουν, να πειραματιστούν 
                και να ανακαλύψουν τη γνώση με τον δικό τους μοναδικό τρόπο.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Οφέλη</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Ενεργός συμμετοχή στη μαθησιακή διαδικασία</li>
                <li>Ανάπτυξη πρακτικών δεξιοτήτων</li>
                <li>Ενίσχυση της αυτενέργειας</li>
                <li>Καλλιέργεια δημιουργικότητας</li>
                <li>Σύνδεση θεωρίας με την πράξη</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/#activities"
              className="inline-block bg-neon-pink hover:bg-neon-blue text-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              Δείτε όλες τις δραστηριότητές μας
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
