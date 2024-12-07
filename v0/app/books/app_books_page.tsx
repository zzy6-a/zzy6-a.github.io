'use client'

import { motion } from 'framer-motion'

export default function Books() {
  const books = [
    { title: "三体", author: "刘慈欣", review: "震撼人心的科幻巨作，展现了宏大的宇宙观和深刻的哲学思考。" },
    { title: "人类简史", author: "尤瓦尔·赫拉利", review: "从生物学角度审视人类历史，给人全新的思考视角。" },
    { title: "深入理解计算机系统", author: "Randal E. Bryant", review: "程序员必读经典，帮助理解计算机底层原理。" },
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-8 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">我的阅读清单</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {books.map((book, index) => (
          <motion.div 
            key={book.title}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-2">作者：{book.author}</p>
            <p className="text-gray-600">{book.review}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

