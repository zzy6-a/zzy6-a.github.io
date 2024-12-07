'use client'

import { motion } from 'framer-motion'
import { AppleCard } from './apple-card'

export function BookList() {
  const books = [
    { title: "三体", author: "刘慈欣", review: "震撼人心的科幻巨作，展现了宏大的宇宙观和深刻的哲学思考。" },
    { title: "怪物大师", author: "雷欧幻想", review: "来自时空尽头的“怪物们”拥有各种特殊能力，它们赌上生命的荣耀，只为召唤唯一的主人……" },
    { title: "活着", author: "余华", review: "在冷静的笔触中展现了生命的意义和存在的价值，揭示了命运的无奈，与生活的不可捉摸。" },
  ]

  return (
    <section id="books" className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">我的阅读清单</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <AppleCard key={book.title} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mb-2">作者：{book.author}</p>
              <p className="text-gray-600">{book.review}</p>
            </AppleCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

