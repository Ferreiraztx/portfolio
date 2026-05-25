"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Code2 } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="sobre" className="py-20 sm:py-32 bg-secondary/30">
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
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Avatar/Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary"
            >
              {/* Substituímos a div antiga por esta tag img */}
              <img
                src="/foto.JPG"
                alt="Minha Foto de Perfil"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Olá! Sou um estudante apaixonado por tecnologia e desenvolvimento de software.
                Minha jornada na programação começou há alguns anos, quando descobri o poder
                de transformar ideias em realidade através do código.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Atualmente, foco em desenvolvimento web full-stack, com especial interesse em
                criar interfaces intuitivas e experiências de usuário excepcionais. Acredito que
                o melhor código é aquele que resolve problemas reais de forma elegante.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Quando não estou codando, gosto de explorar novas tecnologias, contribuir para
                projetos open-source e compartilhar conhecimento com a comunidade de desenvolvedores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {[
                  {
                    icon: GraduationCap,
                    label: "Estudante",
                    value: "6º Semestre",
                  },
                  {
                    icon: MapPin,
                    label: "Localização",
                    value: "São Paulo, BR",
                  },
                  {
                    icon: Code2,
                    label: "Foco",
                    value: "Full-Stack",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
