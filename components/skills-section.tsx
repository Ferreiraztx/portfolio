"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiGit,
  SiDocker,
  SiVercel,
  SiSupabase,
  SiN8N,
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "HTML5/CSS3", icon: SiHtml5, color: "text-orange-500" },
    ],
  },
  {
    title: "Backend & Banco de Dados",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-300" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-teal-300" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
    ],
  },
  {
    title: "Ferramentas & Infra",
    skills: [
      { name: "Git & GitHub", icon: SiGit, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-400" },
      { name: "N8N", icon: SiN8N, color: "text-rose-500" },
      { name: "VS Code", icon: VscCode, color: "text-sky-500" },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Tecnologias
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias, linguagens e ferramentas que utilizo no meu dia a dia para construir soluções web completas e escaláveis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3.5 py-1.5 bg-secondary/50 border border-border text-foreground text-sm font-medium rounded-lg hover:border-primary/50 transition-colors"
                        >
                          <Icon className={`text-base ${skill.color}`} />
                          {skill.name}
                        </motion.span>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}