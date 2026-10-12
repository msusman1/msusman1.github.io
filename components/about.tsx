"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Layers, Cpu, ShieldCheck } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: "Android & Jetpack Compose",
      description: "6+ years deep Android specialization with Kotlin, Jetpack Compose, Coroutines, Flow, Hilt, and Android platform SDKs.",
    },
    {
      icon: <Layers className="h-5 w-5 text-primary" />,
      title: "Kotlin Multiplatform (KMP)",
      description: "Cross-platform mobile architecture sharing business logic and UI with Compose Multiplatform across Android and iOS.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: "Connected Devices & BLE",
      description: "Hands-on experience with Bluetooth Low Energy (BLE), beacon/wearable firmware updates, thermal printers, and USB peripherals.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: "Production Architecture",
      description: "Clean Architecture, MVI/MVVM, dependency injection, rigorous code reviews, automated testing, and legacy codebase refactoring.",
    },
  ]

  const metrics = [
    { value: "10+", label: "Years Total Engineering" },
    { value: "6+", label: "Years Android & Kotlin" },
    { value: "2+", label: "Years Kotlin Multiplatform" },
    { value: "15+", label: "Production & Published Apps" },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About &amp; Specialization</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Senior engineer building reliable mobile applications, shared architectures, and connected device workflows
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl py-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/60 shadow-sm bg-card/60 backdrop-blur">
              <CardContent className="p-6 sm:p-8 space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  I am a senior software engineer with over <strong className="text-foreground">10 years of software development experience</strong>, 
                  including more than <strong className="text-foreground">6 years specializing in Android and modern Kotlin development</strong>. 
                  My focus centers on architecting clean, maintainable, and high-performance applications with Jetpack Compose, 
                  Kotlin Coroutines, and modern dependency injection.
                </p>
                <p>
                  Beyond native Android, I actively engineer cross-platform mobile solutions using <strong className="text-foreground">Kotlin Multiplatform (KMP)</strong> and <strong className="text-foreground">Compose Multiplatform</strong>, 
                  delivering production-ready experiences across Android and iOS with shared data and domain logic.
                </p>
                <p>
                  My engineering background spans diverse domains: consumer AI products, donor kiosks and payment workflows, 
                  BLE hardware firmware configuration, public transportation, and open-source platform utilities. 
                  Whether diagnosing complex concurrency bugs, refactoring legacy codebases to Clean Architecture, 
                  or integrating specialized hardware peripherals, I emphasize production reliability, clarity, and rigorous engineering practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-border/60 bg-muted/30">
                <CardContent className="p-5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">{metric.value}</div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <Card key={index} className="border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-base text-foreground">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
