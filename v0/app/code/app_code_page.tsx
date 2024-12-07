'use client'

import { motion } from 'framer-motion'

export default function Code() {
  const projects = [
    { name: "个人博客", tech: "Next.js, TypeScript, Tailwind CSS", description: "一个展示我的作品和思考的个人网站" },
    { name: "任务管理应用", tech: "React, Redux, Node.js", description: "一个帮助用户管理日常任务的全栈应用" },
    { name: "游戏评分系统", tech: "Vue.js, Firebase", description: "允许用户对游戏进行评分和评论的平台" },
  ]

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-8 px-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">我的代码项目</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-2">技术栈：{project.tech}</p>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

