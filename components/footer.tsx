"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Ferreiraztx", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/matheus-dos-santos-leal-ferreira-a13828357/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=mathxtzferreira@gmail.com", label: "Email" },
]

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projetos" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a
                href="#inicio"
                className="text-xl font-bold text-foreground mb-4 inline-block"
              >
                <img
                  src="/logomf.png"
                  alt="Logo Matheus Ferreira"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Estudante de Engenharia de Software interessado em criar
                experiências digitais incríveis.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Conecte-se
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/10 py-6">
            <div className="text-center text-sm text-gray-400">
              <p className="text-sm items-center text-muted-foreground">
                © {currentYear} Matheus Ferreira. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
