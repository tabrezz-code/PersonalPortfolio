"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle form submission logic here
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-pretty">I'd love to hear from you. Let's connect!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your name" required className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" required className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={5} required className="w-full resize-none" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:siddiquitabrez9696@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    siddiquitabrez9696@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                  <a
                    href="https://github.com/tabrezz-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/tabrezz-code
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/tabrez02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/tabrez02/
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
