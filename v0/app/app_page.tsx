'use client'

import { motion } from 'framer-motion'
import { ProfileCard } from '@/components/profile-card'
import { Favorites } from '@/components/favorites'
import { Influencer } from '@/components/influencer'
import { CodeProjects } from '@/components/code-projects'
import { GameReviews } from '@/components/game-reviews'
import { MusicPlaylists } from '@/components/music-playlists'
import { BookList } from '@/components/book-list'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function Home() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  return (
    <div className="min-h-screen">
      <section id="home" className="min-h-screen pt-16 pb-8 flex flex-col items-center justify-center relative overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ff7e33",
              },
              links: {
                color: "#ff7e33",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileCard />
        </motion.div>
        <motion.p 
          className="mt-8 text-center text-gray-600 max-w-2xl px-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          我在互联网上分享关于#游戏、#内容创作和#生活的故事。
        </motion.p>
      </section>

      <Favorites />
      <Influencer />
      <CodeProjects />
      <GameReviews />
      <MusicPlaylists />
      <BookList />
    </div>
  )
}

