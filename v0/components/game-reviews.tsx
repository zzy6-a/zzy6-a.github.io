'use client'

import { motion } from 'framer-motion'
import { AppleCard } from './apple-card'

export function GameReviews() {
  const games = [
    { title: "塞尔达传说：王国之泪", rating: "9.5/10", review: "开放世界的巅峰之作，创新的游戏机制让人欲罢不能。" },
    { title: "艾尔登法环", rating: "9.5/10", review: "宏大的世界观和挑战性的战斗系统完美结合。" },
    { title: "csgo", rating: "10/10", review: "史上最经典射击游戏，射击手感精准，团战与个人技巧兼具，战术丰富。" },
  ]

  return (
    <section id="game" className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">游戏评测</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <AppleCard key={game.title} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{game.title}</h3>
              <p className="text-orange-500 font-bold mb-2">评分：{game.rating}</p>
              <p className="text-gray-600">{game.review}</p>
            </AppleCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

