"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "Dashboard completo para gestão de e-commerce com análise de vendas, controle de estoque e relatórios em tempo real.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "API de Autenticação",
    description:
      "Sistema de autenticação seguro com JWT, refresh tokens, 2FA e integração OAuth com Google e GitHub.",
    image: "/projects/api.jpg",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    category: "Backend",
    github: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "App de Tarefas",
    description:
      "Aplicação de gerenciamento de tarefas com drag-and-drop, categorias, prazos e notificações.",
    image: "/projects/tasks.jpg",
    tags: ["React", "TypeScript", "Zustand", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "Blog Pessoal",
    description:
      "Blog com sistema de CMS, markdown, SEO otimizado e modo escuro.",
    image: "/projects/blog.jpg",
    tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "CLI de Automação",
    description:
      "Ferramenta de linha de comando para automatizar tarefas repetitivas de desenvolvimento.",
    image: "/projects/cli.jpg",
    tags: ["Python", "Click", "Rich", "APIs"],
    category: "Backend",
    github: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Template",
    description:
      "Template de portfólio moderno e customizável para desenvolvedores.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="h-16 w-16 text-primary/30" />
                  </div>
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
                href="https://github.com"
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
