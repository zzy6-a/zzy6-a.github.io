'use client'

import { motion } from 'framer-motion'

export default function Favorites() {
  const favorites = [
    { title: "最喜欢的编程语言", items: ["TypeScript", "Python", "Rust"] },
    { title: "最喜欢的游戏", items: ["塞尔达传说", "超级鸡马", "Csgo"] },
    { title: "最喜欢的书籍", items: ["三体", "怪物大师", "活着"] },
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-8 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">我的收藏</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {favorites.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {category.items.map((item, itemIndex) => (
                <motion.li 
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

