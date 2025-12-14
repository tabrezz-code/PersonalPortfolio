import { Card } from "@/components/ui/card"
import {
  Code2,
  FileCode2,
  Paintbrush,
  Atom,
  GitBranch,
  Database,
  Server,
  Cpu,
  Network,
} from "lucide-react"

export default function Skills() {
  const skills = [
    // Frontend
    { name: "JavaScript", icon: Code2 },
    { name: "HTML", icon: FileCode2 },
    { name: "CSS", icon: Paintbrush },
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Atom },

    // Backend & Tools
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Network },
    { name: "Git & GitHub", icon: GitBranch },

    // Databases
    { name: "DBMS", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "MongoDB", icon: Server },

    // Core CS
    { name: "Operating Systems", icon: Cpu },
    { name: "Data Structures & Algorithms", icon: Code2 },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-pretty">
            Technologies and core computer science concepts I’m learning and using
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.name}
                className="p-6 sm:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-border bg-card"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {skill.name}
                </h3>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
