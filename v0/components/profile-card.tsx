'use client'

import { motion } from 'framer-motion'

export function ProfileCard() {
  const roles = [
    "Influencer (>286K followers)",
    "Chromium Developer",
    "Web Developer",
    "Game Developer",
    "Game Critic",
    "Digital Nomad",
    "Trader"
  ]

  return (
    <motion.div 
      className="relative"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[600px] h-[600px] rounded-full border border-gray-200 flex items-center justify-center bg-white/50 backdrop-blur-lg">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="space-y-6">
            <div>
              <div className="text-gray-600">我的名字是：</div>
              <motion.div 
                className="text-4xl font-bold text-orange-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                白马
              </motion.div>
            </div>
            <div>
              <div className="text-gray-600">我是：</div>
              <div className="space-y-1">
                {roles.map((role, index) => (
                  <motion.div 
                    key={index} 
                    className="text-gray-500"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="w-16 h-16 rounded-full bg-orange-500" />
      </motion.div>
    </motion.div>
  )
}

