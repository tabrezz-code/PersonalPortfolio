export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="bg-card rounded-lg p-8 sm:p-12 shadow-sm border border-border space-y-6">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            I’m a <span className="font-semibold text-foreground">Junior Software Developer</span> on an exciting journey
            of continuous learning and growth. My passion for technology began when I built my first website, and since
            then, I’ve been fascinated by how <span className="font-medium text-foreground">code can solve real-world problems</span>
            and create meaningful digital experiences.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Currently, I’m focused on mastering <span className="font-medium text-foreground">modern web development</span>,
            including <span className="font-medium text-foreground">React and Next.js</span>, while also strengthening my
            backend skills with <span className="font-medium text-foreground">Node.js and Express.js</span>.
            I enjoy writing <span className="font-medium text-foreground">clean, maintainable code</span> and continuously
            improving through hands-on projects.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            Alongside development, I actively work on building strong foundations in
            <span className="font-medium text-foreground"> Data Structures & Algorithms</span>,
            <span className="font-medium text-foreground"> DBMS</span>,
            <span className="font-medium text-foreground"> Operating Systems</span>, and
            <span className="font-medium text-foreground"> Core Computer Science concepts</span>.
            I love tackling challenges through problem-solving, real-world projects, and consistent practice.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
            I enjoy collaborating with the <span className="font-medium text-foreground">developer community</span>,
            learning from <span className="font-medium text-foreground">senior alumni and mentors</span>, and contributing
            to projects that help me grow both technically and professionally.
            I’m excited to keep learning and contribute to <span className="font-medium text-foreground">impactful software solutions</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
