"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm <span className="text-primary">Tabrez Siddiqui</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4"> Enthusiast Junior Software Developer</p>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate about learning and building innovative web applications. I love turning ideas into reality
            through clean code and great user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="group w-full sm:w-auto">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
