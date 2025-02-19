import { Metadata } from 'next'
import OperatingRegulations from '../components/OperatingRegulations'

export const metadata: Metadata = {
  title: 'Κανονισμός Λειτουργίας | ΚΔΑΠ Καρφίτσα',
  description: 'Ο επίσημος κανονισμός λειτουργίας του ΚΔΑΠ Καρφίτσα',
}

export default function OperatingRegulationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse">
          Κανονισμός Λειτουργίας
        </h1>
        <OperatingRegulations />
      </div>
    </div>
  )
}

