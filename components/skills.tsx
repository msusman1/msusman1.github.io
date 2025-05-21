"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      id: "mobile",
      name: "Mobile Development",
      skills: [
        { name: "Android", level: 95 },
        { name: "Kotlin", level: 95 },
        { name: "Jetpack Compose", level: 90 },
        { name: "MVVM/MVI", level: 90 },
        { name: "Clean Architecture", level: 85 },
        { name: "Hilt-Dagger/Koin", level: 85 },
        { name: "Coroutines/Flow", level: 90 },
        { name: "NFC/Iris/fingerprint Scanner", level: 80 },
        { name: "Swift UI", level: 40 },

      ],
    },
    {
      id: "web",
      name: "Web Development",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Prisma ORM", level: 70 },
      ],
    },
    {
      id: "backend",
      name: "Backend & Database",
      skills: [
        { name: "Ktor", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "SQLite", level: 85 },
        { name: "Firestore", level: 85 },
        { name: "FaunaDB", level: 70 },
        { name: "PostgreSQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Firebase", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Vercel", level: 80 },
        { name: "Netlify", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My technical expertise and proficiency
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-4xl py-12">
          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="space-y-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <motion.div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${skill.level}%` }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
