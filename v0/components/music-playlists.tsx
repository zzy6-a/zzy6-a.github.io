'use client'

import { motion } from 'framer-motion'
import { AppleCard } from './apple-card'

export function MusicPlaylists() {
  const playlists = [
    { name: "游戏专注力", description: "帮助我在游戏时保持专注的轻音乐集合。", tracks: ["Ambient Waves", "Coding Beats", "Minimal Focus"] },
    { name: "游戏原声", description: "我最喜欢的游戏原声音乐精选。", tracks: ["Journey OST", "The Witcher 3 OST", "Hades OST"] },
    { name: "R&B", description: "适合在日常中聆听的音乐人。", tracks: ["周杰伦Jay Chou", "陶喆David", "方大同"] },
  ]

  return (
    <section id="music" className="min-h-screen py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">我的音乐世界</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {playlists.map((playlist, index) => (
            <AppleCard key={playlist.name} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{playlist.name}</h3>
              <p className="text-gray-600 mb-4">{playlist.description}</p>
              <ul className="list-disc list-inside">
                {playlist.tracks.map((track, trackIndex) => (
                  <motion.li 
                    key={track}
                    className="text-gray-600"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + trackIndex * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {track}
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

