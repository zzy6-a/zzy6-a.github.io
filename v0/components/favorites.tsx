'use client'

import { motion } from 'framer-motion'
import { AppleCard } from './apple-card'

export function Favorites() {
  const favorites = [
    { title: "最喜欢的编程语言", items: ["VScode", "Python", "CSS"] },
    { title: "最喜欢的游戏", items: ["塞尔达传说", "超级鸡马", "Csgo"] },
    { title: "最喜欢的书籍", items: ["三体", "怪物大师", "活着"] },
  ]

  return (
    <section id="favorites" className="min-h-screen py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">我的收藏</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {favorites.map((category, index) => (
            <AppleCard key={category.title} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item}
                    className="text-gray-600"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </AppleCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

