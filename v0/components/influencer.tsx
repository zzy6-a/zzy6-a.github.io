'use client'

import { motion } from 'framer-motion'
import { AppleCard } from './apple-card'

export function Influencer() {
  const platforms = [
    { name: "Bilibili", followers: "14", content: "暂未发布作品" },
    { name: "抖音", followers: "58", content: "cs及瓦集锦等" },
    { name: "小红书", followers: "无", content: "暂未发布作品" },
  ]

  return (
    <section id="influencer" className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">我的影响力</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <AppleCard key={platform.name} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{platform.name}</h3>
              <p className="text-gray-600 mb-2">粉丝数：{platform.followers}</p>
              <p className="text-gray-600">主要内容：{platform.content}</p>
            </AppleCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

