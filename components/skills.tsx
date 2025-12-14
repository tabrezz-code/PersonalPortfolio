import { Card } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Git & GitHub", icon: "📦" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-pretty">Technologies I'm learning and working with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="p-6 sm:p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-border bg-card"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
