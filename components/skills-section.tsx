"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 75 },
    ],
  },
]

const techIcons = [
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "React", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-foreground" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Python", color: "bg-blue-600" },
  { name: "Git", color: "bg-orange-500" },
  { name: "Docker", color: "bg-blue-400" },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
              Tecnologias e ferramentas que utilizo no meu dia a dia para criar 
              soluções modernas e eficientes.
            </p>
          </motion.div>

          {/* Tech Icons Grid */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-16">
            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
