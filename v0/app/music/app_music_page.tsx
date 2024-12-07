'use client'

import { motion } from 'framer-motion'

export default function Music() {
  const playlists = [
    { name: "游戏专注力", description: "帮助我在游戏时保持专注的轻音乐集合。", tracks: ["Ambient Waves", "Coding Beats", "Minimal Focus"] },
    { name: "游戏原声", description: "我最喜欢的游戏原声音乐精选。", tracks: ["Journey OST", "The Witcher 3 OST", "Hades OST"] },
    { name: "旅行心情", description: "适合在旅途中聆听的音乐列表。", tracks: ["Wanderlust", "Road Trip Vibes", "City Lights"] },
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-8 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">我的音乐世界</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {playlists.map((playlist, index) => (
          <motion.div 
            key={playlist.name}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{playlist.name}</h2>
            <p className="text-gray-600 mb-4">{playlist.description}</p>
            <ul className="list-disc list-inside">
              {playlist.tracks.map((track, trackIndex) => (
                <motion.li 
                  key={track}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + trackIndex * 0.05, duration: 0.5 }}
                >
                  {track}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

