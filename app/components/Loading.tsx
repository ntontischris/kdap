'use client'

import { motion } from 'framer-motion'

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

export function LoadingSkeleton() {
  return (
    <div className="space-y-4 w-full">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-2/3" />
    </div>
  )
}
