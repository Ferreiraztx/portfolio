"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const timeline = [
  {
    type: "education",
    title: "Ensino Médio Técnico em Desenvolvimento de Sistemas",
    organization: "Colégio Estadual Pedro Macedo",
    period: "2023-2025",
    description:
      "Ensino Médio integrado com curso técnico em Desenvolvimento de Sistemas concluído",
    icon: GraduationCap,
  },
    {
    type: "education",
    title: "Curso Semi-Extensivo do Positivo",
    organization: "Positivo",
    period: "2025",
    description:
      "Fui aluno destaque no colégio e ganhei uma bolsa para o curso do positivo semi-extensivo.",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Bacharelado em Engenharia de Software",
    organization: "Pontifícia Universidade Católica do Paraná - PUCPR",
    period: "2026-2030",
    description:
      "Cursando o 1º semestre com foco em desenvolvimento de software, arquitetura de sistemas e engenharia de dados.",
    icon: GraduationCap,
  },
  {
    type: "experience",
    title: "Jovem Aprendiz em T.I.",
    organization: "BWT Operadora / Serra Verde Express",
    period: "Jan / 2026 - Atual",
    description:
      "Colaboração no desenvolvimento de sistemas, no ajuste de sistemas, helpdesk, ajustes em estoque e documentação técnica.",
    icon: Briefcase,
  },

]

const relevantCourses = [
  "Estruturas de Dados",
  "Algoritmos",
  "Banco de Dados",
  "Engenharia de Software",
  "Desenvolvimento Web",
  "Modelagem de Processos",
  "Inteligência Artificial",
  "Sistemas Cyberfísicos",
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experiencia" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Educação & Experiência
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória acadêmica e profissional, incluindo 
              cursos relevantes para minha formação.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-card border border-border rounded-xl p-6 inline-block text-left"
                  >
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        item.type === "education"
                          ? "bg-primary/10 text-primary"
                          : item.type === "experience"
                          ? "bg-accent/10 text-accent"
                          : "bg-chart-4/10 text-chart-4"
                      }`}
                    >
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-3">
                      {item.organization}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 bg-card border-2 border-primary rounded-full">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Relevant Courses */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              Disciplinas Relevantes
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {relevantCourses.map((course) => (
                <motion.span
                  key={course}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
