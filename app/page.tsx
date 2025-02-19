import dynamic from 'next/dynamic'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InnovativeMethod from './components/InnovativeMethod'
import PhotoGallery from './components/PhotoGallery'
import ActivitiesProgram from './components/ActivitiesProgram'
import ExpressionOfInterest from './components/ExpressionOfInterest'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FutureLabsShowcase from './components/FutureLabsShowcase'

const AILab = dynamic(() => import('./components/AILab'), { ssr: false })
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false })
const FAQ = dynamic(() => import('./components/FAQ'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-900">
      <Header />
      <HeroSection />
      <InnovativeMethod />
      <FutureLabsShowcase />
      <PhotoGallery />
      <ActivitiesProgram />
      <AILab />
      <Testimonials />
      <FAQ />
      <ExpressionOfInterest />
      <Contact />
      <Footer />
    </main>
  )
}
