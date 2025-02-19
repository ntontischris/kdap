'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Particles from "@tsparticles/react"
import type { Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import Link from 'next/link'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="relative w-full h-full"
          style={{ y }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/374772139_1056732812270223_8158585416443270074_n.jpg-gkv9kOYivTDydIEyYUuRkvi5o1q2kR.jpeg"
            alt="ΚΔΑΠ Ντόντης - Παιδιά που αλληλεπιδρούν με τοιχογραφία στη Θεσσαλονίκη"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90" />
        </motion.div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#4fc3dc", "#e879f9", "#ff6ec7"],
            },
            links: {
              color: "#4fc3dc",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient">
              ΚΔΑΠ Ντόντης Θεσσαλονίκη
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 text-shadow-glow">
            Προετοιμάζουμε τους ηγέτες του αύριο στην καρδιά της Θεσσαλονίκης
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Ένας μαγικός χώρος στην Πολίχνη Θεσσαλονίκης, όπου η μάθηση συναντά τη διασκέδαση και κάθε παιδί ανακαλύπτει τις δυνατότητές του
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#activities" 
              className="inline-block bg-neon-purple hover:bg-neon-blue text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Εξερευνήστε τις Δραστηριότητές μας
            </motion.a>
            <Link href="#contact" passHref>
              <motion.span 
                className="inline-block bg-neon-green hover:bg-neon-pink text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-glow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Επικοινωνήστε μαζί μας
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }

        .shadow-glow {
          text-shadow: 0 0 10px rgba(79, 195, 220, 0.8),
                     0 0 20px rgba(79, 195, 220, 0.4);
        }

        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}

