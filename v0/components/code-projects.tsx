'use client'

import { motion } from 'framer-motion'
import { AppleCard } from './apple-card'

export function CodeProjects() {
  const projects = [
    { name: "个人博客", tech: "Next.js, TypeScript, Tailwind CSS", description: "一个展示我的作品和思考的个人网站" },
    { name: "任务管理应用", tech: "React, Redux, Node.js", description: "一个帮助用户管理日常任务的全栈应用" },
    { name: "游戏评分系统", tech: "Vue.js, Firebase", description: "允许用户对游戏进行评分和评论的平台" },
  ]

  return (
    <section id="code" className="min-h-screen py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">我的代码项目</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AppleCard key={project.name} delay={index * 0.1}>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mb-2">技术栈：{project.tech}</p>
              <p className="text-gray-600">{project.description}</p>
            </AppleCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

