"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Science in Information Technology (BS IT)",
      institution: "University of Gujrat, Pakistan",
      period: "August 2011 – May 2015",
      description:
        "Comprehensive coursework in Software Quality Assurance, Data Structures and Algorithms, Android and Web Development, Human-Computer Interaction, and Data Warehousing.",
      score: "Graduated with 3.13 CGPA",
    },
    {
      degree: "Faculty of Science (FSc Pre-Engineering)",
      institution: "Govt Degree College Daska, Pakistan",
      period: "August 2009 – May 2011",
      description: "Foundational coursework in Advanced Mathematics, Physics, and Chemistry.",
      score: "78% Score",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Academic foundations in computer science, software engineering, and applied information technology
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-6 py-10">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border-border/70 shadow-sm bg-card">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">{edu.degree}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm font-medium text-foreground/80">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 pt-1">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  <p className="text-xs font-semibold text-primary">{edu.score}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
