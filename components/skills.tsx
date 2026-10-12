"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Layers, Globe, Cloud, Cpu, Sparkles } from "lucide-react"

export type SkillCategory = {
  id: string
  title: string
  icon: React.ReactNode
  badge: string
  description: string
  coreSkills: string[]
  supportingSkills: string[]
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      id: "android",
      title: "Android Engineering",
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      badge: "Primary Specialization",
      description: "Modern Android application engineering, reactive asynchronous architectures, and performance tuning.",
      coreSkills: [
        "Kotlin",
        "Jetpack Compose",
        "Android SDK",
        "Coroutines & Flow",
        "Clean Architecture",
        "MVVM / MVI",
        "Hilt & Dagger",
        "Room & DataStore",
      ],
      supportingSkills: [
        "Java",
        "Android Telephony APIs",
        "Navigation Compose",
        "WorkManager",
        "Paging 3",
        "Macrobenchmark",
        "JUnit & Espresso",
      ],
    },
    {
      id: "cross-platform",
      title: "Cross-Platform & Mobile",
      icon: <Layers className="h-5 w-5 text-primary" />,
      badge: "Multiplatform Architecture",
      description: "Shared mobile architecture and UI frameworks across Android and iOS platforms.",
      coreSkills: [
        "Kotlin Multiplatform (KMP)",
        "Compose Multiplatform",
        "Shared Business Logic",
        "Ktor HTTP Client",
        "Koin Dependency Injection",
      ],
      supportingSkills: [
        "SwiftUI",
        "Combine",
        "Multiplatform Persistence",
        "RevenueCat & StoreKit",
        "AdMob & Liftoff Mediation",
      ],
    },
    {
      id: "devices",
      title: "Connected Devices & Hardware",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      badge: "Differentiating Capability",
      description: "Interfacing Android with physical hardware peripherals, sensors, and low-power wireless protocols.",
      coreSkills: [
        "Bluetooth Low Energy (BLE)",
        "BLE Scanning & GATT Services",
        "Nordic DFU (OTA Firmware)",
        "Thermal Printers (ESC/POS, Sunmi, Zing)",
      ],
      supportingSkills: [
        "Wi-Fi Direct Peer-to-Peer",
        "Netty TCP Sockets",
        "NFC Tag Reading",
        "USB Host Devices",
        "Iris & Fingerprint Scanners",
      ],
    },
    {
      id: "ai",
      title: "AI-Enabled Applications",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      badge: "Applied AI Integration",
      description: "Integrating verified AI APIs, computer vision, and machine learning models into production mobile apps.",
      coreSkills: [
        "AI API Integration (OpenAI, Anthropic)",
        "Google ML Kit (Vision, Barcode)",
        "Streaming AI Content Delivery",
      ],
      supportingSkills: [
        "Context Prompt Structuring",
        "Audio Narration Integration",
        "Edge Vision & Scanning",
      ],
    },
    {
      id: "web-backend",
      title: "Web & Backend Systems",
      icon: <Globe className="h-5 w-5 text-primary" />,
      badge: "Full-Stack Supporting",
      description: "Developing administrative portals, API services, and modern responsive web interfaces.",
      coreSkills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "RESTful API Integration",
      ],
      supportingSkills: [
        "Ktor (Server-side Kotlin)",
        "Prisma ORM",
        "JOOQ & SQL",
        "Zod Validation",
        "PostgreSQL & MySQL",
      ],
    },
    {
      id: "cloud-devops",
      title: "Cloud & Developer Tooling",
      icon: <Cloud className="h-5 w-5 text-primary" />,
      badge: "Infrastructure & CI/CD",
      description: "Backend-as-a-service, cloud storage, crash monitoring, and automated deployment pipelines.",
      coreSkills: [
        "Firebase (Auth, Firestore, Storage)",
        "Cloud Functions",
        "Firebase Crashlytics & Analytics",
        "Git & GitHub Actions",
      ],
      supportingSkills: [
        "AWS (S3, CloudFront, SES)",
        "GitLab CI",
        "Auth0",
        "Google Play Console & TestFlight",
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Technical Competencies</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Structured engineering skills categorized by specialization depth and production application
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl py-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border-border/70 hover:border-primary/40 transition-colors shadow-sm bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {cat.icon}
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary">
                        {cat.badge}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold mt-2 text-foreground">{cat.title}</CardTitle>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {cat.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-grow pb-5">
                    {/* Core Skills */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                        Core Expertise
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.coreSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="default"
                            className="text-xs font-medium px-2 py-0.5 bg-primary/90 hover:bg-primary text-primary-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Supporting Skills */}
                    <div className="space-y-1.5 pt-2 border-t border-border/40">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                        Supporting &amp; Integrated
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.supportingSkills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs font-normal px-2 py-0.5 text-muted-foreground border-border/80"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
