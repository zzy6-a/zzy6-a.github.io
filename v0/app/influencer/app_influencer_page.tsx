'use client'

import { motion } from 'framer-motion'

export default function Influencer() {
  const platforms = [
    { name: "YouTube", followers: "150K", content: "编程教程和技术评测" },
    { name: "Twitter", followers: "100K", content: "技术见解和行业动态" },
    { name: "Instagram", followers: "36K", content: "生活方式和旅行照片" },
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-8 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">我的影响力</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {platforms.map((platform, index) => (
          <motion.div 
            key={platform.name}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
            <p className="text-gray-600 mb-2">粉丝数：{platform.followers}</p>
            <p className="text-gray-600">主要内容：{platform.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

