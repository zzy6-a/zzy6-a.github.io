'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#favorites', label: 'Favorites' },
  { href: '#influencer', label: 'Influencer' },
  { href: '#code', label: 'Code' },
  { href: '#game', label: 'Game' },
  { href: '#music', label: 'Music' },
  { href: '#books', label: 'Books' },
]

const socialIcons = [
  { href: 'https://space.bilibili.com/', label: 'Bilibili', icon: 'Bi' },
  { href: 'https://www.douyin.com/', label: 'Douyin', icon: '抖' },
]

export function Navigation() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      const targetElement = document.querySelector(href)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="#home" onClick={handleClick} className="text-xl font-semibold">
            白马
          </Link>
        </motion.div>
        
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href} onClick={handleClick} className="hover:text-orange-500 transition-colors">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {socialIcons.map(({ href, label, icon }) => (
            <motion.div
              key={href}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link href={href} className="hover:text-orange-500 transition-colors" aria-label={label}>
                <span className="text-lg font-bold">{icon}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

