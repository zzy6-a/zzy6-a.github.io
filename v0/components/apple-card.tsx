import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AppleCardProps {
  children: ReactNode
  delay?: number
}

export function AppleCard({ children, delay = 0 }: AppleCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-6 backdrop-blur-lg bg-opacity-80 border border-gray-200"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

