"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, BookOpen, Compass, Trophy, Film } from "lucide-react"

export default function Interests() {
  const interests = [
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: "Kotlin & Open Source",
      description: "Experimenting with Kotlin Multiplatform advancements, Compose internals, and open-source tooling.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Embedded & Hardware",
      description: "Tinkering with microcontrollers, BLE beacons, IoT integrations, and hardware protocols.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Technical Reading",
      description: "Studying software architecture, system reliability, and modern mobile engineering literature.",
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "Sports & Fitness",
      description: "Playing competitive badminton and soccer to maintain balance, agility, and teamwork.",
    },
    {
      icon: <Compass className="h-6 w-6 text-primary" />,
      title: "Outdoors & Travel",
      description: "Exploring natural landscapes and hiking trails to disconnect and recharge.",
    },
    {
      icon: <Film className="h-6 w-6 text-primary" />,
      title: "Documentaries",
      description: "Deep-diving into documentaries on engineering feats, history, and scientific discoveries.",
    },
  ]

  return (
    <section id="interests" className="py-16 md:py-24 bg-muted/30 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Personal Pursuits</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Interests and activities beyond day-to-day code delivery
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/70 hover:border-primary/40 transition-colors shadow-sm bg-card">
                  <CardContent className="p-6 flex flex-col items-start space-y-3">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">{interest.icon}</div>
                    <h3 className="text-base font-bold text-foreground">{interest.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
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
