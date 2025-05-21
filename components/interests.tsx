"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Gamepad2, Leaf, Rocket, Shirt } from "lucide-react"

export default function Interests() {
  const interests = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Competitive Programming",
      description: "Enjoy doing competitive programming in Kotlin",
    },
    {
      icon: <Shirt className="h-10 w-10 text-primary" />,
      title: "Sports",
      description: "Enjoy playing badminton and soccer",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Outdoors",
      description: "Enjoy spending time outdoors and in nature",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Reading",
      description: "Like reading books and expanding knowledge",
    },
    {
      icon: <Gamepad2 className="h-10 w-10 text-primary" />,
      title: "Documentaries",
      description: "Enjoy watching documentaries on various topics",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "New Technologies",
      description: "Exploring blockchain and cloud computing",
    },
  ]

  return (
    <section id="interests" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interests</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              What I enjoy doing in my free time
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">{interest.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
