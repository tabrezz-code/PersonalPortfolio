import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "A responsive weather app that displays current weather and forecasts using a weather API.",
      tech: ["React", "CSS", "API"],
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Todo List App",
      description: "A simple and elegant task management application with local storage persistence.",
      tech: ["JavaScript", "HTML", "CSS"],
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js showcasing my projects and skills.",
      tech: ["Next.js", "React", "Tailwind"],
      demo: "https://example.com",
      github: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-pretty">Check out some of my recent work</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
