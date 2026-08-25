"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Pahragon Beach Tennis",
    description:
      "Site desenvolvido para agendamentos da arena pahragon",
      image: "/Pahragon.jpg",
      tags: ["React.js", "Tailwind CSS", "Vite", "React Router DOM", "Node.js", "Express.js", "Cors" ],
      category: "Full-Stack",
      github:"https://github.com/Ferreiraztx/pahragon",
      demo:"https://pahragon-teal.vercel.app",
      featured:true,

  },
  {
    id: 2,
    title: "Blog GI UFPR",
    description:
      "Blog para um projeto de extensão de uma estudante da UFPR direcionado ao curso de Gestão da Informação",
    image: "/GIUFPR.jpg",
    tags: ["Typescript", "Vite", "React", "Supabase"],
    category: "Full-Stack",
    github: "https://github.com/Ferreiraztx/giufpr",
    demo: "https://giufpr.lovable.app",
    featured: true,
  },
  {
    id: 3,
    title: "Bello Sushi Bar",
    description:
      "Site para bar para divulgação de rodízio",
    image: "/Bello.jpg",
    tags: ["Typescript", "Vite", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/Ferreiraztx/bello",
    demo: "https://bellosushibar.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Projeto Agrinho",
    description:
      "Projeto desenvolvido para um concurso escolar utilizando apenas HTML e CSS.",
    image: "/Agrinho.jpg",
    tags: ["HTML", "CSS"],
    category: "Frontend",
    github: "https://github.com/Ferreiraztx/projeto_agrinho",
    demo: "https://ferreiraztx.github.io/projeto_agrinho/",
    featured: false,
  },
  {
    id: 5,
    title: "Flowo Focus - Site de Tarefas",
    description:
      "Aplicação de gerenciamento de tarefas com drag-and-drop, categorias e prazos.",
    image: "/FlowoFocus.jpg",
    tags: ["React", "TypeScript", "Zustand", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/Ferreiraztx/Flowo-Focus",
    demo: "https://flowo-focus.vercel.app",
    featured: true,
  }
]

const categories = ["Todos", "Frontend", "Backend", "Full-Stack"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
    <section id="projetos" className="py-20 sm:py-32 bg-secondary/30">
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
              Projetos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus projetos mais recentes. Cada um representa um
              desafio único e uma oportunidade de aprendizado.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Destaque
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background rounded-full text-foreground hover:text-primary transition-colors"
                      aria-label="Ver código no GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background rounded-full text-foreground hover:text-primary transition-colors"
                        aria-label="Ver demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/Ferreiraztx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Ver mais no GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
