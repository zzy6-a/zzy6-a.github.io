'use client'

import { motion } from 'framer-motion'

export default function Game() {
  const games = [
    { title: "塞尔达传说：王国之泪", rating: "9.5/10", review: "开放世界的巅峰之作，创新的游戏机制让人欲罢不能。" },
    { title: "艾尔登法环", rating: "9.5/10", review: "宏大的世界观和挑战性的战斗系统完美结合。" },
    { title: "csgo", rating: "10/10", review: "史上最经典射击游戏，射击手感精准，团战与个人技巧兼具，战术丰富。" },
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-8 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">游戏评测</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {games.map((game, index) => (
          <motion.div 
            key={game.title}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-orange-500 font-bold mb-2">评分：{game.rating}</p>
            <p className="text-gray-600">{game.review}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

