import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { ThemeProvider } from './providers/ThemeProvider'
import { ToastProvider } from './providers/ToastProvider'

const inter = Inter({ subsets: ['latin', 'greek'] })

// Dynamically import ElevenLabsChat with SSR disabled
const ElevenLabsChat = dynamic(() => import('./components/ElevenLabsChat'), { ssr: false })

export const metadata: Metadata = {
  title: 'ΚΔΑΠ Καρφίτσα - Καινοτόμο Κέντρο Δημιουργικής Απασχόλησης Παιδιών στη Θεσσαλονίκη',
  description: 'Το ΚΔΑΠ Καρφίτσα στη Θεσσαλονίκη προσφέρει καινοτόμα προγράμματα και δραστηριότητες για παιδιά, συνδυάζοντας τη Μοντεσσοριανή μέθοδο με σύγχρονες τεχνολογίες.',
  keywords: ['ΚΔΑΠ', 'Θεσσαλονίκη', 'δημιουργική απασχόληση', 'Μοντεσσοριανή μέθοδος', 'εκπαίδευση παιδιών'],
  authors: [{ name: 'ΚΔΑΠ Καρφίτσα' }],
  creator: 'ΚΔΑΠ Καρφίτσα',
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: 'https://www.kdapkarfitsa.gr',
    siteName: 'ΚΔΑΠ Καρφίτσα',
    title: 'ΚΔΑΠ Καρφίτσα - Καινοτόμο Κέντρο Δημιουργικής Απασχόλησης Παιδιών',
    description: 'Ανακαλύψτε τις μοναδικές εκπαιδευτικές εμπειρίες που προσφέρει το ΚΔΑΠ Καρφίτσα στη Θεσσαλονίκη.',
    images: [
      {
        url: 'https://www.kdapkarfitsa.gr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ΚΔΑΠ Καρφίτσα - Καινοτόμο Κέντρο Δημιουργικής Απασχόλησης Παιδιών',
      },
    ],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          {children}
          <ElevenLabsChat />
        </ThemeProvider>
      </body>
    </html>
  )
}